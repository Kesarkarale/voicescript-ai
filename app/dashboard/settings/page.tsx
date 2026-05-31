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
        <div className="space-y-4">
  <div className="bg-zinc-900 p-5 rounded-xl">
    Profile Settings
  </div>

  <div className="bg-zinc-900 p-5 rounded-xl">
    Notification Settings
  </div>

  <div className="bg-zinc-900 p-5 rounded-xl">
    Billing Settings
  </div>
</div>
      </section>
    </main>
  );
}
