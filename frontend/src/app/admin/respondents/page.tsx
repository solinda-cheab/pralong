"use client";

import React, { useState } from "react";
import { Search, UserPlus, Mail, MoreVertical, Filter } from "lucide-react";

interface Respondent {
  id: string;
  name: string;
  email: string;
  group: string;
  testsCompleted: number;
  lastActive: string;
}

const initialRespondents: Respondent[] = [
  { id: "1", name: "James Wang", email: "james.wang@example.com", group: "Math Olympiad", testsCompleted: 4, lastActive: "2026-05-29" },
  { id: "2", name: "Isla Walsh", email: "isla.walsh@example.com", group: "Foundation", testsCompleted: 2, lastActive: "2026-05-28" },
  { id: "3", name: "Michael O'Brien", email: "m.obrien@example.com", group: "Beginner", testsCompleted: 5, lastActive: "2026-05-27" },
  { id: "4", name: "Oscar Wilson", email: "oscar.w@example.com", group: "Math Olympiad", testsCompleted: 3, lastActive: "2026-05-25" },
];

export default function RespondentsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRespondents = initialRespondents.filter(
    (r) =>
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Respondents <span className="text-slate-400 font-normal">({filteredRespondents.length})</span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage test takers, access credentials, and track progress.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 transition-colors"
        >
          <UserPlus className="h-4 w-4 stroke-[2.5]" />
          <span>Add respondent</span>
        </button>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between shadow-xs">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-slate-200 pl-9 pr-4 py-2 text-xs font-medium text-slate-700 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors"
        >
          <Filter className="h-4 w-4 text-slate-500" />
          <span>Filter Groups</span>
        </button>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden">
        <table className="w-full border-collapse text-left text-sm text-slate-700">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <th className="py-3.5 px-4">Name</th>
              <th className="py-3.5 px-4">Group</th>
              <th className="py-3.5 px-4">Tests Completed</th>
              <th className="py-3.5 px-4">Last Active</th>
              <th className="py-3.5 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredRespondents.map((respondent) => (
              <tr key={respondent.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4">
                  <div className="font-semibold text-slate-800">{respondent.name}</div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                    <Mail className="h-3 w-3" />
                    <span>{respondent.email}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                    {respondent.group}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-xs font-medium text-slate-700">
                  {respondent.testsCompleted} tests
                </td>
                <td className="py-3.5 px-4 text-xs text-slate-500">
                  {respondent.lastActive}
                </td>
                <td className="py-3.5 px-4 text-right">
                  <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}