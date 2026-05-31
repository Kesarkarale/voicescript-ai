export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-zinc-800 min-h-screen p-6">
          <h2 className="text-2xl font-bold mb-8">
            VoiceScript AI
          </h2>

          <div className="space-y-4">
            <p>Dashboard</p>
            <p>Transcripts</p>
            <p>Uploads</p>
            <p>Billing</p>
            <p>Settings</p>
          </div>
        </aside>

        {/* Content */}
        <section className="flex-1 p-8">
          <h1 className="text-4xl font-bold mb-8">
            Dashboard
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 rounded-2xl p-6">
              <h3>Total Transcripts</h3>
              <p className="text-3xl font-bold mt-2">124</p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6">
              <h3>Uploads</h3>
              <p className="text-3xl font-bold mt-2">58</p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6">
              <h3>Storage</h3>
              <p className="text-3xl font-bold mt-2">1.2 GB</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 mt-8">
            <h2 className="text-2xl font-bold mb-4">
              Upload Audio
            </h2>

            <div className="border-2 border-dashed border-zinc-700 rounded-xl p-12 text-center">
              Drag & Drop Audio File Here
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
