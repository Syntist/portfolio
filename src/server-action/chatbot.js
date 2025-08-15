"use server";

import db from "@/db/conn";
import { personalContext } from "@/utils/chatContext";
import { retrieveGitHubRepoInfo } from "@/utils/utils";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ObjectId } from "mongodb";
import OpenAI from "openai";
import { getRepoReadme } from "./github";
import { getProject } from "./project";

let Chatbot = db.collection("chatbot");
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_CHAT_API);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.DEEPSEEK_CHAT_API,
  defaultHeaders: {
    "HTTP-Referer": "https://www.syedtalhakhalid.com/",
    "X-Title": "Syed Talha Khalid",
  },
});

export async function chatbot(contents, history, id, summary = false) {
  let context;
  if (id === "self") {
    context = personalContext;
  } else {
    context = await getContext(id);
  }

  if (summary) {
    const project = await getProject(id);
    const readme = await getRepoReadme(project.github);
    context = `Summarize the following content in a concise manner, focusing on key points and main ideas:\n\n${context} and ${readme}`;
  }

  const encoder = new TextEncoder();
  const readableStream = new ReadableStream({
    async start(controller) {
      try {
        const chat = model.startChat({
          history: [
            {
              role: "user",
              parts: [{ text: context }],
            },
            ...history,
            {
              role: "user",
              parts: [{ text: contents }],
            },
          ],
        });

        let result = await chat.sendMessageStream(contents);

        for await (const chunk of result.stream) {
          controller.enqueue(encoder.encode(chunk.text()));
        }

        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
  });

  return readableStream;
}

export async function testChatBot(contents, history, id) {
  let context;
  if (id === "self") {
    context = personalContext;
  } else {
    context = await getContext(id);
  }
  const encoder = new TextEncoder();
  const readableStream = new ReadableStream({
    async start(controller) {
      try {
        console.log([
          {
            role: "system",
            content: `info: ${context}. You are their AI assistant.`,
          },
          ...history,
          {
            role: "user",
            content: contents,
          },
        ]);

        const result = await openai.chat.completions.create({
          model: "deepseek/deepseek-r1:free",
          messages: [
            {
              role: "system",
              content: `info: ${context}. You are their AI assistant.`,
            },
            ...history,
            {
              role: "user",
              content: contents,
            },
          ],
          stream: true,
        });

        for await (const chunk of result) {
          // console.log(chunk.choices || '');
          controller.enqueue(
            encoder.encode(chunk.choices[0]?.delta?.content || "")
          );
        }

        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
  });

  return readableStream;
}

export async function contextSession(id, github) {
  try {
    const oldContext = await getContext(id);

    console.log(oldContext);

    if (oldContext) {
      // Fire and forget the update context asynchronously
      retrieveGitHubRepoInfo(github).then((newContext) => {
        Chatbot.updateOne(
          { _id: new ObjectId(id) },
          { $set: { context: newContext } },
          { upsert: true }
        ).catch(console.error); // catch errors here so they don't go unhandled
      });

      // Immediately return the id
      return id;
    }

    // If no context exists, wait for it, update, then return id
    const context = await retrieveGitHubRepoInfo(github);

    await Chatbot.updateOne(
      { _id: new ObjectId(id) },
      { $set: { context: context } },
      { upsert: true }
    );

    return id;
  } catch (e) {
    return e;
  }
}

export async function getContext(id) {
  try {
    const data = await Chatbot.findOne({ _id: new ObjectId(id) });

    return data.context;
  } catch (e) {
    return e;
  }
}

export async function getSummary(id) {
  try {
    const data = await Chatbot.findOne({ _id: new ObjectId(id) });

    return data?.summary;
  } catch (e) {
    return e;
  }
}

export const getProjectSummary = async (handler) => {
  const project = await getProject(handler);
  const data = await Chatbot.findOne({ _id: new ObjectId(project._id) });

  const oldSummary = data?.summary;

  if (!project) return null;

  if (oldSummary) {
    return { ...project, _id: project?._id, summary: oldSummary };
  }

  const id = await contextSession(project._id, project.github);

  const chatStream = await chatbot(
    "Give me indepth summary of this project",
    [],
    id,
    true
  );

  // Convert stream -> text
  const summary = await new Response(chatStream).text();

  Chatbot.updateOne(
    { _id: new ObjectId(id) },
    { $set: { summary: summary } },
    { upsert: true }
  ).catch(console.error);

  return { ...project, _id: project?._id, summary };
};

export const refreshSummary = async (handler) => {
  const project = await getProject(handler);

  if (!project) return null;

  const id = await contextSession(project._id, project.github);

  const chatStream = await chatbot(
    "Give me indepth summary of this project",
    [],
    id,
    true
  );

  // Convert stream -> text
  const summary = await new Response(chatStream).text();

  Chatbot.updateOne(
    { _id: new ObjectId(id) },
    { $set: { summary: summary } },
    { upsert: true }
  ).catch(console.error);

  return { ...project, _id: project?._id, summary };
};
