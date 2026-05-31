import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            VoiceScript<span className="text-blue-500">AI</span>
          </h1>

          <div className="hidden md:flex gap-8 text-zinc-300">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <Link href="/dashboard">Dashboard</Link>
          </div>

          <div className="flex gap-3">
            <Link
              href="/sign-in"
              className="border border-zinc-700 px-4 py-2 rounded-lg"
            >
              Login
            </Link>

            <Link
              href="/sign-up"
              className="bg-blue-600 px-4 py-2 rounded-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <span className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-400">
            AI Powered Speech To Text
          </span>

          <h1 className="text-6xl font-bold mt-8 leading-tight">
            Convert Audio & Video
            <br />
            Into Text In Seconds
          </h1>

          <p className="text-zinc-400 text-xl mt-6 max-w-3xl mx-auto">
            Upload audio files, generate transcripts, summaries,
            subtitles and meeting notes instantly with AI.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <Link
              href="/dashboard"
              className="bg-blue-600 px-8 py-4 rounded-xl text-lg"
            >
              Start Free
            </Link>

            <button className="border border-zinc-700 px-8 py-4 rounded-xl text-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["10K+", "Users"],
            ["500K+", "Transcripts"],
            ["99.9%", "Accuracy"],
            ["24/7", "Available"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center"
            >
              <h3 className="text-3xl font-bold">{value}</h3>
              <p className="text-zinc-400 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-14">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">
              AI Transcription
            </h3>
            <p className="text-zinc-400">
              Convert speech into accurate text instantly.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">
              Smart Summaries
            </h3>
            <p className="text-zinc-400">
              Generate AI-powered meeting summaries.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">
              Export Anywhere
            </h3>
            <p className="text-zinc-400">
              Download PDF, DOCX and TXT files.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="max-w-5xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Simple Pricing
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">Free</h3>
            <p className="text-5xl font-bold mt-4">$0</p>

            <ul className="mt-6 space-y-3 text-zinc-400">
              <li>✓ 5 Uploads</li>
              <li>✓ Basic Transcripts</li>
              <li>✓ AI Summary</li>
            </ul>
          </div>

          <div className="bg-blue-600 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="text-5xl font-bold mt-4">$19</p>

            <ul className="mt-6 space-y-3">
              <li>✓ Unlimited Uploads</li>
              <li>✓ Premium Accuracy</li>
              <li>✓ PDF & DOCX Export</li>
              <li>✓ Priority Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500">
        © 2026 VoiceScript AI. All rights reserved.
      </footer>
    </main>
  );
}
