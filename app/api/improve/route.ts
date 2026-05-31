import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text } = await req.json();

  // simple AI-style cleanup (later we can connect OpenAI)
  const improved = text
    .replace(/\s+/g, " ")
    .trim()
    .replace(/i am/g, "I am")
    .replace(/i'm/g, "I'm");

  return NextResponse.json({ result: improved });
}
