"use server";

import { personalContext } from "@/utils/chatContext";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_CHAT_API);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function chatbot(contents, history, oContext) {
  let context;
  if (oContext === "self") {
    context = personalContext;
  } else {
    context = oContext;
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
