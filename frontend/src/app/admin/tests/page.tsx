"use client";

import React, { useState } from "react";
import Link from "next/link";
import TestCard from "@/components/admin/TestCard";
import CategoryFilter, { Category } from "@/components/admin/CategoryFilter";
import { Plus } from "lucide-react";

const categoriesData: Category[] = [
  { id: "uncategorized", name: "Uncategorized", count: 6 },
];

const initialTests = [
  {
    id: "1",
    status: "ENDED" as const,
    createdAt: "2026-05-29",
    title: "New test",
    description: "(no description)",
    avgScore: "-%",
    resultsCount: 0,
    category: "UNCATEGORIZED",
  },
  {
    id: "2",
    status: "ENDED" as const,
    createdAt: "2025-03-04",
    title: "លំហាត់ត្រៀមប្រឡងប្រកួតប្រជែងគណិតវិទ្យាលើកទី៦",
    description: "(no description)",
    avgScore: "-%",
    resultsCount: 0,
    category: "UNCATEGORIZED",
  },
  {
    id: "3",
    status: "ENDED" as const,
    createdAt: "2025-03-02",
    title: "Example Quiz for Restaurant Staff",
    description: "(no description)",
    avgScore: "-%",
    resultsCount: 0,
    category: "UNCATEGORIZED",
  },
  {
    id: "4",
    status: "ENDED" as const,
    createdAt: "2025-03-02",
    title: "Example: Customer Care Periodic Test",
    description: "(no description)",
    avgScore: "-%",
    resultsCount: 0,
    category: "UNCATEGORIZED",
  },
  {
    id: "5",
    status: "ENDED" as const,
    createdAt: "2025-03-02",
    title: "Example Product Knowledge Test for Sales",
    description: "(no description)",
    avgScore: "-%",
    resultsCount: 0,
    category: "UNCATEGORIZED",
  },
  {
    id: "6",
    status: "ENDED" as const,
    createdAt: "2025-03-02",
    title: "Example Reasoning Test",
    description: "(no description)",
    avgScore: "-%",
    resultsCount: 0,
    category: "UNCATEGORIZED",
  },
];

export default function AdminTestsPage() {
  const [tests, setTests] = useState(initialTests);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered list based on status & search query
  const filteredTests = tests.filter((test) => {
    const matchesStatus =
      statusFilter === "All" ||
      test.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesSearch = test.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          My tests <span className="text-slate-400 font-normal">({filteredTests.length})</span>
        </h1>

        <Link
          href="/admin/tests/create"
          className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 active:bg-orange-800"
        >
          <Plus className="h-4 w-4 stroke-[2.5]" />
          <span>New test</span>
        </Link>
      </div>

      {/* Filter Bar Component */}
      <CategoryFilter
        categories={categoriesData}
        status={statusFilter}
        onStatusChange={setStatusFilter}
        onSearchChange={setSearchQuery}
        onManageCategories={() => console.log("Manage categories clicked")}
      />

      {/* Test Cards Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filteredTests.map((test) => (
          <TestCard
            key={test.id}
            testId={test.id}
            {...test}
            onMenuClick={() => console.log("Menu clicked for", test.id)}
          />
        ))}
      </div>
    </div>
  );
}