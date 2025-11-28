import { Suspense } from "react";
import InsightsContent from "./InsightsContent";

export default function InsightsPage() {
  return (
    <Suspense
      fallback={<div className="min-h-screen font-montserrat bg-white"></div>}
    >
      <InsightsContent />
    </Suspense>
  );
}
