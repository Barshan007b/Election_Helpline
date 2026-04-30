import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return new Response(JSON.stringify({ error: "API key not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { messages } = await req.json();

    const systemPrompt = `You are VoteWise AI, a strictly neutral, highly educational, and friendly assistant designed to help citizens, especially first-time voters in India, understand the election process. 

Rules:
1. Be completely neutral. Never show bias towards any political party, candidate, or ideology.
2. Keep answers simple, using plain English. Avoid overly complex legal jargon unless explaining it.
3. Focus on the facts of the Indian democratic and electoral process (e.g., ECI, EVMs, VVPATs, registration, polling).
4. If asked who to vote for, politely explain that voting is a personal choice and your role is only to explain HOW the process works, not WHO to choose.
5. Format your responses with markdown for readability (bullet points, bold text).
6. Keep responses relatively concise but informative.`;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    let historyMessages = messages.slice(0, -1);
    if (historyMessages.length > 0 && historyMessages[0].role === "model") {
      historyMessages = historyMessages.slice(1);
    }

    // Format history for Gemini
    const chat = model.startChat({
      history: historyMessages.map((m: any) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      })),
      systemInstruction: {
        role: "system",
        parts: [{ text: systemPrompt }]
      }
    });

    const lastMessage = messages[messages.length - 1];
    const result = await chat.sendMessage(lastMessage.content);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ text }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Gemini API error:", error);
    return new Response(JSON.stringify({ error: "Failed to generate response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
