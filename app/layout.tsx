import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RH • Tri-Axis Toroidal Reflection — SP1RL",
  description: "Prime-aware Portal P(n) with ε-breath. Math ↔ Myth design bible.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
