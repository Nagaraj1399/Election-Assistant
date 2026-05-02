import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemPrompt = `You are a helpful and knowledgeable AI assistant specializing in the Indian electoral process. 
  Your primary goal is to educate users about how elections work in India.
  You should answer questions related to:
  - The Election Commission of India (ECI)
  - Voter registration and eligibility
  - Electronic Voting Machines (EVMs) and VVPAT
  - The Model Code of Conduct
  - Election terminology (Lok Sabha, Rajya Sabha, Constituencies, etc.)
  
  Please be neutral, objective, and factual. Do not express political opinions or bias towards any political party.
  If a user asks a question unrelated to elections or Indian civics, politely steer the conversation back to the topic of the Indian electoral process.`;

  const result = await streamText({
    model: google('models/gemini-2.5-pro'),
    messages,
    system: systemPrompt,
  });

  return result.toAIStreamResponse();
}
