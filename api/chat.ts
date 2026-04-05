import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Set runtime to edge for fastest performance
export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  // Extract messages and context from the request body
  const { messages, context } = await req.json();

  const result = await streamText({
    model: openai('gpt-4o-mini'), // High performance, low cost
    messages: [
      {
        role: 'system',
        content: `You are the AI Digital Twin of Sahil Pandita.
        Context: ${JSON.stringify(context)}.
        Personality: Professional, data-driven (Amazon growth expert), concise.
        Rules: 
        1. Focus on Amazon growth systems and metrics.
        2. Keep answers to 1-2 impactful sentences.`,
      },
      ...messages,
    ],
  });

  return result.toDataStreamResponse();
}