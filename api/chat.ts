import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

export const config = { runtime: 'edge' };

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: Request) {
  const { messages, context } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    stream: true,
    messages: [
      {
        role: 'system',
        content: `You are the AI Digital Twin of Sahil Pandita.
        Context: ${JSON.stringify(context)}.
        Personality: Professional, data-driven (Amazon growth expert), slightly witty.
        Rules: 
        1. Emphasize metrics like £4.5M Monthly GMV if asked about growth.
        2. Mention the Pulsar F250 if asked about bikes.
        3. Keep answers concise (1-2 sentences) suitable for a search bar interface.`,
      },
      ...messages,
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}