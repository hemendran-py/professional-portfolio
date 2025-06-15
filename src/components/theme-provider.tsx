"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark" // ✅ force default dark mode
      enableSystem={false} // ✅ disable system preference
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
