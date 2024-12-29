import { createGroq } from "@ai-sdk/groq";
export const grok = createGroq({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.NEXT_PUBLIC_GROK_API_KEY,
});
