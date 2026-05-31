export default function SummaryCard({
  summary,
}: {
  summary: string;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 h-[420px]">
      <h2 className="text-2xl font-bold mb-4">
        AI Summary
      </h2>

      <div className="text-zinc-400">
        {summary || "AI summary will appear here..."}
      </div>
    </div>
  );
}
