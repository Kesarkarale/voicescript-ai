import Sidebar from "@/components/Sidebar";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-6">
          Settings
        </h1>

        <div className="space-y-4">
          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">
              Profile Settings
            </h2>
            <p className="text-zinc-400">
              Manage your account information.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">
              Notification Settings
            </h2>
            <p className="text-zinc-400">
              Configure email and app notifications.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">
              Billing Settings
            </h2>
            <p className="text-zinc-400">
              View subscription and payment details.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
