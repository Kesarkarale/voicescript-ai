import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    transcript: "Sample transcript from VoiceScript AI"
  });
}
