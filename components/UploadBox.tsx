"use client";

import { Upload } from "lucide-react";

export default function UploadBox() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
      <h2 className="text-2xl font-bold mb-6">
        Upload Audio or Video
      </h2>

      <div className="border-2 border-dashed border-zinc-700 rounded-2xl p-16 text-center hover:border-blue-500 transition">
        <Upload className="mx-auto mb-4 h-12 w-12" />

        <h3 className="text-xl font-semibold">
          Drag & Drop Files
        </h3>

        <p className="text-zinc-400 mt-2">
          MP3, WAV, MP4, M4A supported
        </p>

        <button className="mt-6 bg-blue-600 px-6 py-3 rounded-xl">
          Choose File
        </button>
      </div>
    </div>
  );
}
