import Sidebar from "@/components/Sidebar";

export default function UploadsPage() {
  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-6">
          Uploads
        </h1>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          No uploads found.
        </div>
      </section>
    </main>
  );
}
