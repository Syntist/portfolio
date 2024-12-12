"use server";

import db from "@/db/conn";
import { personalContext } from "@/utils/chatContext";
import { retrieveGitHubRepoInfo } from "@/utils/utils";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ObjectId } from "mongodb";

let Chatbot = db.collection("chatbot");
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_CHAT_API);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function chatbot(contents, history, id) {
  let context;
  if (id === "self") {
    context = personalContext;
  } else {
    context = await getContext(id)
  }

  const encoder = new TextEncoder();
  const readableStream = new ReadableStream({
    async start(controller) {
      try {
        const chat = model.startChat({
          history: [
            ...history,
            {
              role: "user",
              parts: [{ text: `${context}\n\nUser: ${contents}\nAssistant:` }],
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
