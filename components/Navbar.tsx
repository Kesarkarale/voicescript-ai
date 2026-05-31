import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          VoiceScript<span className="text-blue-500">AI</span>
        </h1>

        <div className="hidden md:flex gap-8 text-sm">
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
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
