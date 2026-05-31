"use client";

import { useState } from "react";
import { Mic, Square, Copy, Trash2 } from "lucide-react";

export default function DashboardPage() {
  const [recording, setRecording] = useState(false);
  const [text, setText] = useState("");

  // dummy voice simulation (next step we will connect real API)
  const startRecording = () => {
    setRecording(true);

    setTimeout(() => {
      setText("Hello, this is your VoiceScript AI generated text example.");
      setRecording(false);
    }, 3000);
  };

  const stopRecording = () => {
    setRecording(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          VoiceScript <span className="text-blue-500">Dashboard</span>
        </h1>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {/* Recorder Box */}
        <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">

          <h2 className="text-xl font-semibold mb-4">🎤 Voice Recorder</h2>

          <div className="flex gap-4">
            {!recording ? (
              <button
                onClick={startRecording}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-xl"
              >
                <Mic size={18} /> Start
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 rounded-xl"
              >
                <Square size={18} /> Stop
              </button>
            )}
          </div>

          <p className="text-zinc-400 mt-4">
            {recording ? "Recording..." : "Click start to begin voice input"}
          </p>
        </div>

        {/* Output Box */}
        <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">📝 Generated Script</h2>

            <div className="flex gap-2">
              <button className="p-2 bg-zinc-800 rounded-lg">
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
            className="w-full h-64 p-4 bg-zinc-950 border border-zinc-800 rounded-xl text-white"
            placeholder="Your converted speech will appear here..."
          />
        </div>

      </div>
    </div>
  );
}
