import Sidebar from "@/components/Sidebar";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-6">
          Settings
        </h1>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          User settings will appear here.
        </div>
      </section>
    </main>
  );
}
