export default function TranscriptCard() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 h-[420px]">
      <h2 className="text-2xl font-bold mb-4">
        Transcript
      </h2>

      <div className="overflow-y-auto h-[320px] text-zinc-400">
        Upload a file to generate transcript...
      </div>
    </div>
  );
}
