"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Settings,
  Search,
  Check,
  X,
} from "lucide-react";

export interface Category {
  id: string;
  name: string;
  count?: number;
}

export interface CategoryFilterProps {
  categories?: Category[];
  selectedCategoryIds?: string[];
  onCategoryChange?: (selectedIds: string[]) => void;
  status?: string;
  onStatusChange?: (status: string) => void;
  onManageCategories?: () => void;
  onSearchChange?: (query: string) => void;
}

const defaultCategories: Category[] = [
  { id: "uncategorized", name: "Uncategorized", count: 0 },
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories = defaultCategories,
  selectedCategoryIds,
  onCategoryChange,
  status = "All",
  onStatusChange,
  onManageCategories,
  onSearchChange,
}) => {
  // State management
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Selection tracking
  const [selectedIds, setSelectedIds] = useState<string[]>(
    selectedCategoryIds || ["all", ...categories.map((c) => c.id)]
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
        setIsStatusOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Check if "All categories" is selected
  const isAllSelected = selectedIds.includes("all");

  const toggleAll = () => {
    if (isAllSelected) {
      setSelectedIds([]);
      onCategoryChange?.([]);
    } else {
      const all = ["all", ...categories.map((c) => c.id)];
      setSelectedIds(all);
      onCategoryChange?.(all);
    }
  };

  const toggleCategory = (id: string) => {
    let updated: string[];
    if (selectedIds.includes(id)) {
      updated = selectedIds.filter((item) => item !== id && item !== "all");
    } else {
      updated = [...selectedIds.filter((item) => item !== "all"), id];
      if (updated.length === categories.length) {
        updated.push("all");
      }
    }
    setSelectedIds(updated);
    onCategoryChange?.(updated);
  };

  // Label calculation
  const getCategoryLabel = () => {
    if (isAllSelected || selectedIds.length === categories.length + 1) {
      return "All categories";
    }
    if (selectedIds.length === 0) return "None";
    if (selectedIds.length === 1) {
      const cat = categories.find((c) => c.id === selectedIds[0]);
      return cat ? cat.name : "1 selected";
    }
    return `${selectedIds.length} selected`;
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      {/* Top Filter Bar Header */}
      <div className="flex flex-wrap items-center justify-between rounded-t-lg border-b border-slate-200 bg-white px-4 py-3 shadow-2xs">
        
        {/* Left Section: Category Dropdown + Manage Categories */}
        <div className="flex items-center gap-6">
          {/* Category Selector Trigger */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
            >
              <span className="text-slate-400">Category</span>
              <span className="font-semibold text-slate-700">{getCategoryLabel()}</span>
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </button>

            {/* Category Dropdown Popover */}
            {isCategoryOpen && (
              <div className="absolute left-0 top-full mt-2 z-30 w-64 rounded-md border border-slate-200 bg-white p-4 shadow-lg transition-all">
                <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-3">
                  Select categories to show
                </span>

                <div className="space-y-3">
                  {/* "All categories" checkbox */}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        toggleAll();
                      }}
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                        isAllSelected
                          ? "border-emerald-500 bg-emerald-500 text-white"
                          : "border-slate-300 group-hover:border-slate-400 bg-white"
                      }`}
                    >
                      {isAllSelected && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>
                    <span className="text-sm font-medium text-slate-700 select-none">
                      All categories (1)
                    </span>
                  </label>

                  {/* Dynamic Category List */}
                  {categories.map((cat) => {
                    const isChecked = selectedIds.includes(cat.id);
                    return (
                      <label
                        key={cat.id}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            toggleCategory(cat.id);
                          }}
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                            isChecked
                              ? "border-emerald-500 bg-emerald-500 text-white"
                              : "border-slate-300 group-hover:border-slate-400 bg-white"
                          }`}
                        >
                          {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                        </div>
                        <span className="text-sm font-medium text-slate-700 select-none">
                          {cat.name}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="h-4 w-px bg-slate-200" />

          {/* Manage Categories Action Button */}
          <button
            type="button"
            onClick={onManageCategories}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Settings className="h-4 w-4 text-slate-500" />
            <span>Manage categories</span>
          </button>
        </div>

        {/* Right Section: Status Filter + Search */}
        <div className="flex items-center gap-4">
          {/* Status Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsStatusOpen(!isStatusOpen)}
              className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-slate-700 transition-colors"
            >
              <span>Status</span>
              <span className="font-semibold text-slate-700">{status}</span>
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </button>

            {isStatusOpen && (
              <div className="absolute right-0 top-full mt-2 z-30 w-36 rounded-md border border-slate-200 bg-white py-1 shadow-md">
                {["All", "Active", "Ended", "Draft"].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => {
                      onStatusChange?.(st);
                      setIsStatusOpen(false);
                    }}
                    className={`w-full px-4 py-1.5 text-left text-sm transition-colors ${
                      status === st
                        ? "bg-slate-50 font-semibold text-emerald-600"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="h-4 w-px bg-slate-200" />

          {/* Search Toggle Button / Input */}
          <div className="relative flex items-center">
            {isSearchOpen ? (
              <div className="flex items-center gap-1 bg-slate-50 rounded-md border border-slate-200 px-2 py-1">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search tests..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    onSearchChange?.(e.target.value);
                  }}
                  className="w-36 bg-transparent text-xs text-slate-700 focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                    onSearchChange?.("");
                  }}
                  className="p-0.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-1 text-slate-400 hover:text-slate-600 transition-colors"
                title="Search tests"
              >
                <Search className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;