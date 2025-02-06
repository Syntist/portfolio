"use server";

import db from "@/db/conn";
import { personalContext } from "@/utils/chatContext";
import { retrieveGitHubRepoInfo } from "@/utils/utils";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ObjectId } from "mongodb";
import OpenAI from "openai";

let Chatbot = db.collection("chatbot");
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_CHAT_API);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.DEEPSEEK_CHAT_API,
  defaultHeaders: {
    "HTTP-Referer": "https://www.syedtalhakhalid.com/",
    "X-Title": "Syed Talha Khalid",
  },
});

export async function chatbot(contents, history, id) {
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
    const context = await retrieveGitHubRepoInfo(github);

    const session = await Chatbot.updateOne(
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
