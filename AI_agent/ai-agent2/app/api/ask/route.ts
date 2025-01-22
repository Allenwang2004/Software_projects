import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  try {
    const { question } = await request.json();
    if (!question) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      );
    }

    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: question,
      max_tokens: 150,
    });

    const answer = completion.data.choices[0]?.text.trim();
    return NextResponse.json({ answer });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch answer' }, { status: 500 });
  }
}