"use client";

import ThemeProvider from "./theme-provider";
import { Toaster } from "@/components/ui/toaster";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme={true}
      themes={["light", "dark"]}
    >
      <Toaster />
      {children}
    </ThemeProvider>
  );
}

export default Providers;
