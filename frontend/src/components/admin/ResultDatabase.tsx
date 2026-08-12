"use client";

import React, { useState } from "react";
import {
  Layers,
  Filter,
  Search,
  Columns,
  Download,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export interface ResultItem {
  id: number;
  testName: string;
  lastName: string;
  firstName: string;
  percentage: number;
  scoreRatio: string;
  endDate: string;
  time: string;
}

const mockResults: ResultItem[] = [
  { id: 1, testName: "Example Reasoning Test", lastName: "Wang", firstName: "James", percentage: 50, scoreRatio: "3/6", endDate: "2025-01-02 21:25", time: "01:01" },
  { id: 2, testName: "Example Reasoning Test", lastName: "Walsh", firstName: "Isla", percentage: 33.3, scoreRatio: "2/6", endDate: "2025-01-02 21:24", time: "00:53" },
  { id: 3, testName: "Example Reasoning Test", lastName: "O'Brien", firstName: "Michael", percentage: 33.3, scoreRatio: "2/6", endDate: "2025-01-02 21:24", time: "01:12" },
  { id: 4, testName: "Example Reasoning Test", lastName: "Jack", firstName: "James", percentage: 50, scoreRatio: "3/6", endDate: "2025-01-02 21:23", time: "00:53" },
  { id: 5, testName: "Example Reasoning Test", lastName: "Wilson", firstName: "Oscar", percentage: 66.7, scoreRatio: "4/6", endDate: "2025-01-02 21:23", time: "00:46" },
  { id: 6, testName: "Example Reasoning Test", lastName: "Brown", firstName: "Mason", percentage: 33.3, scoreRatio: "2/6", endDate: "2025-01-02 21:23", time: "01:03" },
  { id: 7, testName: "Example Reasoning Test", lastName: "Byrne", firstName: "Damian", percentage: 33.3, scoreRatio: "2/6", endDate: "2025-01-02 21:20", time: "01:13" },
  { id: 8, testName: "Example Reasoning Test", lastName: "O'Connor", firstName: "Connor", percentage: 50, scoreRatio: "3/6", endDate: "2025-01-02 21:19", time: "01:04" },
  { id: 9, testName: "Example Reasoning Test", lastName: "Lee", firstName: "William", percentage: 50, scoreRatio: "3/6", endDate: "2025-01-02 21:16", time: "00:37" },
  { id: 10, testName: "Example Reasoning Test", lastName: "Taylor", firstName: "Jennifer", percentage: 83.3, scoreRatio: "5/6", endDate: "2025-01-02 21:13", time: "00:52" },
];

export default function ResultDatabase() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);

  const toggleSelectAll = () => {
    if (selectedRows.length === mockResults.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(mockResults.map((item) => item.id));
    }
  };

  const toggleSelectRow = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Page Heading */}
      <h1 className="text-xl font-bold tracking-tight text-slate-800">
        Results database
      </h1>

      {/* Main Table Container Card */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden">
        
        {/* Top Action Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-3">
          <div className="text-sm font-semibold text-slate-800">
            Results ({mockResults.length * 3})
          </div>

          <div className="flex items-center gap-2">
            {/* Grouping Button */}
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <Layers className="h-4 w-4 text-slate-500" />
              <span>Grouping</span>
              <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-500">
                0
              </span>
            </button>

            {/* Filters Button */}
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <Filter className="h-4 w-4 text-slate-500" />
              <span>Filters</span>
              <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-500">
                0
              </span>
            </button>

            {/* Search Toggle Icon */}
            <button
              type="button"
              className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Columns Toggle Icon */}
            <button
              type="button"
              className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <Columns className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <th className="py-3 px-4 w-10 text-center">
                  <input
                    type="checkbox"
                    checked={
                      selectedRows.length === mockResults.length &&
                      mockResults.length > 0
                    }
                    onChange={toggleSelectAll}
                    className="h-4 w-4 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                  />
                </th>
                <th className="py-3 px-4 w-12 text-slate-500">#</th>
                <th className="py-3 px-4">Test Name</th>
                <th className="py-3 px-4">Last Name</th>
                <th className="py-3 px-4">First Name</th>
                <th className="py-3 px-4">Total Score</th>
                <th className="py-3 px-4">End Date</th>
                <th className="py-3 px-4">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockResults.map((row) => {
                const isSelected = selectedRows.includes(row.id);
                const isPassing = row.percentage >= 50;

                return (
                  <tr
                    key={row.id}
                    className={`hover:bg-slate-50/80 transition-colors ${
                      isSelected ? "bg-slate-50" : ""
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="py-3 px-4 text-center">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelectRow(row.id)}
                        className="h-4 w-4 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                      />
                    </td>

                    {/* Row Number */}
                    <td className="py-3 px-4 text-slate-500 font-medium text-xs">
                      {row.id}
                    </td>

                    {/* Test Name */}
                    <td className="py-3 px-4 font-medium text-slate-800">
                      {row.testName}
                    </td>

                    {/* Last Name */}
                    <td className="py-3 px-4 text-slate-700">{row.lastName}</td>

                    {/* First Name */}
                    <td className="py-3 px-4 text-slate-700">{row.firstName}</td>

                    {/* Score Badge */}
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center justify-center rounded-md px-3 py-1 text-xs font-semibold ${
                          isPassing
                            ? "bg-emerald-200/70 text-emerald-900"
                            : "bg-rose-300/80 text-rose-900"
                        }`}
                      >
                        {row.percentage}% ({row.scoreRatio})
                      </span>
                    </td>

                    {/* End Date */}
                    <td className="py-3 px-4 text-xs text-slate-600 whitespace-nowrap">
                      {row.endDate}
                    </td>

                    {/* Duration Time */}
                    <td className="py-3 px-4 text-xs text-slate-600 whitespace-nowrap">
                      {row.time}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination Controls */}
        <div className="flex flex-wrap items-center justify-between border-t border-slate-100 px-6 py-3 text-xs text-slate-500">
          {/* Export Action */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Download className="h-4 w-4 text-slate-500" />
            <span>Export</span>
          </button>

          {/* Right Controls: Results per page + Pagination */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span>Results per page</span>
              <div className="relative">
                <select
                  value={resultsPerPage}
                  onChange={(e) => setResultsPerPage(Number(e.target.value))}
                  className="appearance-none rounded-md border border-slate-200 bg-white py-1 pr-7 pl-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-1.5 top-1.5 h-3.5 w-3.5 text-slate-400" />
              </div>
            </div>

            <span className="text-slate-600 font-medium">1 - 10 of 30</span>

            <div className="flex items-center gap-1">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="p-1 text-slate-400 hover:text-slate-700 disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`h-6 w-6 rounded text-xs font-semibold transition-colors ${
                    currentPage === page
                      ? "bg-slate-100 text-slate-900 border border-slate-200"
                      : "text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                disabled={currentPage === 3}
                onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
                className="p-1 text-slate-400 hover:text-slate-700 disabled:opacity-40"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}