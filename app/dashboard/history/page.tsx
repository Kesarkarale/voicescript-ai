import Sidebar from "@/components/Sidebar";

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-6">
          Transcript History
        </h1>

        <div className="space-y-4">
          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex justify-between items-center">
            <div>
              <h3 className="font-semibold">meeting.mp3</h3>
              <p className="text-zinc-400 text-sm">
                Generated transcript successfully
              </p>
            </div>

            <span className="text-green-500">
              Completed
            </span>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex justify-between items-center">
            <div>
              <h3 className="font-semibold">podcast.wav</h3>
              <p className="text-zinc-400 text-sm">
                Generated transcript successfully
              </p>
            </div>

            <span className="text-green-500">
              Completed
            </span>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex justify-between items-center">
            <div>
              <h3 className="font-semibold">interview.mp4</h3>
              <p className="text-zinc-400 text-sm">
                Processing audio file
              </p>
            </div>

            <span className="text-yellow-500">
              Processing
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
