 "use client";

import { useState } from "react";
import UploadBox from "@/components/UploadBox";
import TranscriptCard from "@/components/TranscriptCard";
import SummaryCard from "@/components/SummaryCard";

export default function Dashboard() {
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <main>
      <UploadBox
        setTranscript={setTranscript}
        setSummary={setSummary}
      />

      <TranscriptCard transcript={transcript} />

      <SummaryCard summary={summary} />
    </main>
  );
}
