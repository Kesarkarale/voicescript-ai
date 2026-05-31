"use client";

import { useState, useRef } from "react";
import { Mic, Square, Copy, Trash2 } from "lucide-react";

export default function DashboardPage() {
  const [recording, setRecording] = useState(false);
  const [text, setText] = useState("");

  const recognitionRef = useRef<any>(null);

  const startRecording = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support voice recognition");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event: any) => {
      let transcript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }

      setText(transcript);
    };

    recognition.onerror = (err: any) => {
      console.log(err);
    };

    recognition.start();
    recognitionRef.current = recognition;
    setRecording(true);
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setRecording(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">

      <h1 className="text-3xl font-bold">
        VoiceScript <span className="text-blue-500">Dashboard</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {/* Recorder */}
        <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
          <h2 className="text-xl font-semibold mb-4">🎤 Voice Recorder</h2>

          {!recording ? (
            <button
              onClick={startRecording}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-xl"
            >
              <Mic size={18} /> Start Recording
            </button>
          ) : (
            <button
              onClick={stopRecording}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 rounded-xl"
            >
              <Square size={18} /> Stop Recording
            </button>
          )}

          <p className="text-zinc-400 mt-4">
            {recording ? "🎙 Listening..." : "Click start and speak"}
          </p>
        </div>

        {/* Output */}
        <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">📝 Script</h2>

            <div className="flex gap-2">
              <button
                onClick={() => navigator.clipboard.writeText(text)}
                className="p-2 bg-zinc-800 rounded-lg"
              >
                <Copy size={16} />
              </button>

              <button
                onClick={() => setText("")}
                className="p-2 bg-zinc-800 rounded-lg"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-64 p-4 bg-zinc-950 border border-zinc-800 rounded-xl"
          />
        </div>

      </div>
    </div>
  );
}
