import Sidebar from "@/components/Sidebar";

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-6">
          Transcript History
        </h1>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          No transcript history available.
        </div>
        <div className="space-y-4">
  <div className="bg-zinc-900 p-4 rounded-xl">
    meeting.mp3
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl">
    podcast.wav
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl">
    interview.mp4
  </div>
</div>
      </section>
    </main>
  );
}
