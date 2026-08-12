"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MoreHorizontal, BarChart2, Calendar, Folder } from "lucide-react";

export interface TestCardProps {
  status?: "ACTIVE" | "ENDED" | "DRAFT" | "SCHEDULED" | string;
  createdAt: string;
  title: string;
  description?: string | null;
  avgScore?: string;
  resultsCount?: number;
  category?: string;
  onMenuClick?: () => void;
  onClick?: () => void;
  testId?: string;
}

export const TestCard: React.FC<TestCardProps> = ({
  status = "ENDED",
  createdAt,
  title,
  description,
  avgScore = "-%",
  resultsCount = 0,
  category = "UNCATEGORIZED",
  onMenuClick,
  onClick,
  testId,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (testId) {
      router.push(`/admin/tests/${testId}`);
    }
  };
  // Dynamic status badge styling
  const getStatusStyles = (statusUpper: string) => {
    switch (statusUpper) {
      case "ACTIVE":
        return "bg-emerald-50 text-emerald-700 ring-emerald-600/20";
      case "DRAFT":
        return "bg-amber-50 text-amber-700 ring-amber-600/20";
      case "SCHEDULED":
        return "bg-blue-50 text-blue-700 ring-blue-600/20";
      case "ENDED":
      default:
        return "bg-slate-100 text-slate-600 ring-slate-500/10";
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group relative flex flex-col justify-between h-[190px] w-full rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-emerald-500/30 cursor-pointer overflow-hidden"
    >
      {/* Accent Left Bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-200 group-hover:bg-blue-900 transition-colors duration-200" />

      {/* Card Header & Content */}
      <div className="w-full">
        <div className="flex items-center justify-between gap-2">
          {/* Status Badge & Date */}
          <div className="flex items-center gap-2.5">
            <span
              className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase ring-1 ring-inset ${getStatusStyles(
                status.toUpperCase()
              )}`}
            >
              {status}
            </span>
            <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
              <Calendar className="w-3 h-3 text-slate-400" />
              <span>{createdAt}</span>
            </div>
          </div>

          {/* Context Menu Action */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onMenuClick?.();
            }}
            className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="More options"
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>

        {/* Title */}
        <h3 className="mt-3 text-base font-semibold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-1 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-1 text-xs text-slate-500 line-clamp-1 leading-relaxed">
          {description && description !== "(no description)"
            ? description
            : "No description provided"}
        </p>
      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-100">
        {/* Statistics */}
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <BarChart2 className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-800">{avgScore}</span>
            <span className="text-slate-400 text-[11px]">avg</span>
          </div>

          <div className="h-3 w-px bg-slate-200" />

          <div className="flex items-center gap-1 text-[11px] text-slate-500">
            <span className="font-semibold text-slate-700">{resultsCount}</span>
            <span>results</span>
          </div>
        </div>

        {/* Category Pill */}
        <div className="flex items-center gap-1 max-w-[130px] rounded-md bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500 ring-1 ring-inset ring-slate-500/10 shrink-0">
          <Folder className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="truncate uppercase tracking-wider">{category}</span>
        </div>
      </div>
    </div>
  );
};

export default TestCard;