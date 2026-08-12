"use client";

import { useEffect, useState } from "react";

export default function HydrationGate({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main style={{ minHeight: "100vh" }} suppressHydrationWarning />
    );
  }

  return <>{children}</>;
}
