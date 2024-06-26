"use client";

import { TooltipProvider } from "@risc0/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";
import { Toaster } from "../components/toaster";

// Client-side providers
export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange enableSystem enableColorScheme>
      <TooltipProvider>{children}</TooltipProvider>
      <Toaster visibleToasts={3} richColors duration={8000} />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}
