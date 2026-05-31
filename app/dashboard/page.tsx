import UploadBox from "@/components/UploadBox";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <UploadBox />

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h3>Total Uploads</h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h3>Transcripts</h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h3>Storage Used</h3>
          <p className="text-3xl font-bold mt-2">0 MB</p>
        </div>
      </div>
    </main>
  );
}
