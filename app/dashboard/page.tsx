import UploadBox from "@/components/UploadBox";
import TranscriptCard from "@/components/TranscriptCard";
import SummaryCard from "@/components/SummaryCard";
import Sidebar from "@/components/Sidebar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex">
        <Sidebar />

        <section className="flex-1 p-6 md:p-8">
          <div className="mb-8">
            <h2 className="text-4xl font-bold">
              Dashboard
            </h2>

            <p className="text-zinc-400 mt-2">
              Upload audio and generate transcripts instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <p className="text-zinc-400">Uploads</p>
              <h3 className="text-3xl font-bold mt-2">12</h3>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <p className="text-zinc-400">Transcripts</p>
              <h3 className="text-3xl font-bold mt-2">38</h3>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <p className="text-zinc-400">Summaries</p>
              <h3 className="text-3xl font-bold mt-2">25</h3>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <p className="text-zinc-400">Storage</p>
              <h3 className="text-3xl font-bold mt-2">1.2 GB</h3>
            </div>
          </div>

          <div className="grid xl:grid-cols-3 gap-6">
            <UploadBox />
            <TranscriptCard />
            <SummaryCard />
          </div>

          <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-2xl font-bold mb-4">
              Recent Activity
            </h3>

            <div className="space-y-4 text-zinc-300">
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span>meeting.mp3</span>
                <span className="text-green-500">Completed</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span>podcast.wav</span>
                <span className="text-green-500">Completed</span>
              </div>

              <div className="flex justify-between">
                <span>client-call.mp4</span>
                <span className="text-yellow-500">Processing</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
