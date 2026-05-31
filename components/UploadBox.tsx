"use client";

import { useState } from "react";
import { Upload } from "lucide-react";

export default function UploadBox() {
  
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 h-[420px]">
      <h2 className="text-2xl font-bold mb-6">
        Upload Audio or Video
      </h2>

      <label className="border-2 border-dashed border-zinc-700 rounded-2xl h-[250px] flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition">
        <Upload className="h-12 w-12 mb-4" />

        <h3 className="text-xl font-semibold">
          Click to Upload
        </h3>

        <p className="text-zinc-400 mt-2">
          MP3, WAV, MP4, M4A Supported
        </p>

        <input
          type="file"
          accept=".mp3,.wav,.mp4,.m4a"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {fileName && (
        <div className="mt-4 bg-zinc-800 p-3 rounded-xl">
          Selected: {fileName}
        </div>
      )}
    </div>
  );
}
