import UploadBox from "@/components/UploadBox";
import TranscriptCard from "@/components/TranscriptCard";
import SummaryCard from "@/components/SummaryCard";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 min-h-screen border-r border-zinc-800 p-6">
          <h1 className="text-2xl font-bold mb-10">
            VoiceScript<span className="text-blue-500">AI</span>
          </h1>

          <nav className="space-y-3">
            <button className="w-full text-left bg-blue-600 px-4 py-3 rounded-xl">
              Dashboard
            </button>

            <button className="w-full text-left hover:bg-zinc-900 px-4 py-3 rounded-xl">
              Uploads
            </button>

            <button className="w-full text-left hover:bg-zinc-900 px-4 py-3 rounded-xl">
              Transcript History
            </button>

            <button className="w-full text-left hover:bg-zinc-900 px-4 py-3 rounded-xl">
              AI Summaries
            </button>

            <button className="w-full text-left hover:bg-zinc-900 px-4 py-3 rounded-xl">
              Billing
            </button>

            <button className="w-full text-left hover:bg-zinc-900 px-4 py-3 rounded-xl">
              Settings
            </button>
          </nav>

          <div className="mt-12 p-4 bg-zinc-900 rounded-2xl">
            <h3 className="font-semibold">Pro Plan</h3>
            <p className="text-zinc-400 text-sm mt-2">
              Unlimited uploads and exports.
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold">
                Dashboard
              </h2>

              <p className="text-zinc-400 mt-2">
                Manage uploads, transcripts and AI summaries.
              </p>
            </div>

            <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center font-bold">
              K
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <p className="text-zinc-400">Uploads</p>
              <h3 className="text-3xl font-bold mt-2">12</h3>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <p className="text-zinc-400">Transcripts</p>
              <h3 className="text-3xl font-bold mt-2">38</h3>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <p className="text-zinc-400">AI Summaries</p>
              <h3 className="text-3xl font-bold mt-2">25</h3>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <p className="text-zinc-400">Storage</p>
              <h3 className="text-3xl font-bold mt-2">1.2GB</h3>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid xl:grid-cols-3 gap-6">
            <UploadBox />
            <TranscriptCard />
            <SummaryCard />
          </div>

          {/* Recent Activity */}
          <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-2xl font-bold mb-6">
              Recent Activity
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span>meeting-recording.mp3</span>
                <span className="text-green-500">
                  Completed
                </span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span>podcast-episode.wav</span>
                <span className="text-green-500">
                  Completed
                </span>
              </div>

              <div className="flex justify-between">
                <span>client-call.mp4</span>
                <span className="text-yellow-500">
                  Processing
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
