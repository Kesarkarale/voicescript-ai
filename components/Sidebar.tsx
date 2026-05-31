import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 min-h-screen border-r border-zinc-800 flex-col p-6">
      <h1 className="text-2xl font-bold mb-10">
        VoiceScript<span className="text-blue-500">AI</span>
      </h1>

      <nav className="space-y-2">
        <Link
          href="/dashboard"
          className="block px-4 py-3 rounded-xl hover:bg-zinc-900"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/uploads"
          className="block px-4 py-3 rounded-xl hover:bg-zinc-900"
        >
          Uploads
        </Link>

        <Link
          href="/dashboard/history"
          className="block px-4 py-3 rounded-xl hover:bg-zinc-900"
        >
          History
        </Link>

        <Link
          href="/dashboard/settings"
          className="block px-4 py-3 rounded-xl hover:bg-zinc-900"
        >
          Settings
        </Link>
      </nav>

     <div className="mt-auto">
  <div className="mb-4 flex justify-center">
    <UserButton afterSignOutUrl="/" />
  </div>

  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
    <h3 className="font-semibold">Free Plan</h3>
    <p className="text-sm text-zinc-400 mt-2">
      Upgrade to Pro for unlimited transcripts.
    </p>
  </div>
</div>
    </aside>
  );
}
