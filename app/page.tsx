 import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
// ===============================
// app/page.tsx (Home Page)
// ===============================
import { Mic, Sparkles, Zap, Shield, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-zinc-800">
        <h1 className="text-2xl font-bold">
          VoiceScript<span className="text-blue-500">AI</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="/dashboard" className="hover:text-white">Dashboard</a>
        </nav>

        <a
          href="/dashboard"
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-medium"
        >
          Get Started
        </a>
      </header>

      {/* Hero */}
      <section className="text-center px-6 py-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full text-sm text-zinc-300">
          <Sparkles size={16} /> AI Powered Voice to Script Tool
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mt-6">
          Turn Voice Into <span className="text-blue-500">Structured Script</span>
        </h2>

        <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
          Convert your speech into clean, professional text instantly using AI.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 flex items-center gap-2">
            Start Recording <Mic size={18} />
          </button>

          <a
            href="/dashboard"
            className="px-6 py-3 bg-zinc-800 rounded-xl hover:bg-zinc-700"
          >
            Go to Dashboard
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20 bg-zinc-900/40">
        <h3 className="text-3xl font-bold text-center mb-12">Features</h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
            <Mic className="text-blue-500" />
            <h4 className="text-xl font-semibold mt-4">Voice Input</h4>
            <p className="text-zinc-400 mt-2">Capture and convert speech instantly.</p>
          </div>

          <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
            <Zap className="text-yellow-500" />
            <h4 className="text-xl font-semibold mt-4">AI Processing</h4>
            <p className="text-zinc-400 mt-2">Smart formatting and cleaning of text.</p>
          </div>

          <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
            <Shield className="text-green-500" />
            <h4 className="text-xl font-semibold mt-4">Secure Storage</h4>
            <p className="text-zinc-400 mt-2">Your data stays private and safe.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <h3 className="text-3xl md:text-4xl font-bold">
          Start using VoiceScript AI
        </h3>
        <p className="text-zinc-400 mt-4">
          Boost productivity with voice-powered scripting.
        </p>

        <a
          href="/dashboard"
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-blue-600 rounded-xl hover:bg-blue-500"
        >
          Open Dashboard <ArrowRight size={18} />
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8 text-center text-zinc-500">
        © {new Date().getFullYear()} VoiceScript AI
      </footer>
    </div>
  );
}


// ===============================
// app/dashboard/page.tsx
// ===============================

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-zinc-400 mt-2">
        Welcome to your VoiceScript AI dashboard.
      </p>

      <div className="mt-8 p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
        <p className="text-zinc-300">
          🎤 Start recording feature will be implemented here
        </p>
      </div>
    </div>
  );
}
