export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            VoiceScript<span className="text-blue-500">AI</span>
          </h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>

          <button className="bg-blue-600 px-4 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
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
              Upload audio or video files and generate accurate transcripts,
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
                Welcome to VoiceScript AI. This transcript was generated using
                advanced speech recognition technology...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "AI Transcription",
            "100+ Languages",
            "Subtitle Export",
            "AI Summaries",
            "Secure Storage",
            "Fast Processing",
          ].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <h3 className="font-semibold text-xl mb-2">{item}</h3>
              <p className="text-zinc-400">
                Professional AI powered feature for creators and businesses.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold">Free</h3>
            <p className="text-5xl font-bold mt-4">₹0</p>
          </div>

          <div className="bg-blue-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="text-5xl font-bold mt-4">₹299</p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold">Business</h3>
            <p className="text-5xl font-bold mt-4">₹999</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500">
        © 2026 VoiceScript AI. All rights reserved.
      </footer>
    </main>
  );
}
