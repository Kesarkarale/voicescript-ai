import UploadBox from "@/components/UploadBox";
import TranscriptCard from "@/components/TranscriptCard";
import SummaryCard from "@/components/SummaryCard";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          VoiceScript AI Dashboard
        </h1>

        <p className="text-zinc-400 mt-2">
          Upload audio and generate transcripts instantly.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <UploadBox />
        <TranscriptCard />
        <SummaryCard />
      </div>
    </main>
  );
}
