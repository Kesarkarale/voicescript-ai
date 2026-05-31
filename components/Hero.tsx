export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-blue-500 font-medium mb-4">
            AI Speech To Text Platform
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Convert Voice Into Text In Seconds
          </h1>

          <p className="text-zinc-400 text-lg mt-6">
            Upload audio or video files and generate transcripts,
            subtitles, notes and summaries powered by AI.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 px-6 py-3 rounded-xl">
              Start Free
            </button>

            <button className="border border-zinc-700 px-6 py-3 rounded-xl">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <div className="bg-black rounded-2xl p-5">
            <p className="text-sm text-zinc-500 mb-3">
              Transcript Preview
            </p>

            <p className="text-zinc-300">
              Welcome to VoiceScript AI. Your transcript will appear here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
