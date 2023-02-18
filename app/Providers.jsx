"use client";
import { ThemeProvider, useTheme } from "next-themes";
import "./globals.css";

export default function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
