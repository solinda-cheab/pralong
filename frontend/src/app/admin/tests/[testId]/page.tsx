import React from "react";

export default function TestDetailPage({
  params,
}: {
  params: { testId: string };
}) {
  return (
    <div className="mx-auto max-w-5xl bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
      <h1 className="text-xl font-bold text-slate-800">
        Test Details - ID: {params.testId}
      </h1>
      <p className="text-sm text-slate-500">
        Manage test configuration, respondents, and question sets here.
      </p>
    </div>
  );
}