"use client";

import React, { useState } from "react";
import {
  Grid,
  Users,
  BarChart2,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export interface SidebarProps {
  activeTab?: string;
  onTabSelect?: (tabId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab = "my-tests",
  onTabSelect,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const mainNav = [
    { id: "my-tests", label: "My tests", icon: Grid },
    { id: "respondents", label: "Respondents", icon: Users },
    { id: "results", label: "Results database", icon: BarChart2 },
    { id: "account", label: "My account", icon: Settings },
  ];

  const bottomNav = [
    { id: "help", label: "Help", icon: HelpCircle },
    { id: "signout", label: "Sign out", icon: LogOut },
  ];

  return (
    <aside
      className={`sticky top-0 h-screen shrink-0 flex flex-col justify-between bg-white border-r border-slate-200 transition-all duration-300 z-20 ${
        isCollapsed ? "w-16 px-2" : "w-60 px-3"
      }`}
    >
      <div>
        {/* Logo Header */}
        <div
          className={`flex items-center gap-3 py-6 ${
            isCollapsed ? "justify-center px-0" : "px-3"
          }`}
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-emerald-50 text-[#FF5C00] shrink-0">
            <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
          </div>
          {!isCollapsed && (
            <span className="text-xl font-bold tracking-tight text-blue-900 whitespace-nowrap">
              Pralong <span className="text-[#FF5C00]">Exam</span>
            </span>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="mt-1 space-y-1">
          {mainNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabSelect?.(item.id)}
                title={isCollapsed ? item.label : undefined}
                className={`w-full flex items-center gap-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isCollapsed ? "justify-center px-0" : "px-3"
                } ${
                  isActive
                    ? "bg-emerald-50/70 text-[][#FF5C00] hover:bg-emerald-50/80"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon
                  className={`w-5 h-5 shrink-0 ${
                    isActive ? "text-blue-900 stroke-[2.2]" : "text-slate-400"
                  }`}
                />
                {!isCollapsed && (
                  <span className="whitespace-nowrap">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Action Area */}
      <div className="pb-4 space-y-1">
        {bottomNav.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabSelect?.(item.id)}
              title={isCollapsed ? item.label : undefined}
              className={`w-full flex items-center gap-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors ${
                isCollapsed ? "justify-center px-0" : "px-3"
              }`}
            >
              <Icon className="w-5 h-5 text-slate-400 shrink-0" />
              {!isCollapsed && (
                <span className="whitespace-nowrap">{item.label}</span>
              )}
            </button>
          );
        })}

        {/* Toggle Button */}
        <button
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expand sidebar" : "Hide sidebar"}
          className={`w-full flex items-center gap-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-blue-900 transition-colors mt-2 ${
            isCollapsed ? "justify-center px-0" : "px-3"
          }`}
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5 text-slate-400 shrink-0" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-slate-400 shrink-0" />
          )}
          {!isCollapsed && <span className="whitespace-nowrap">Hide</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;