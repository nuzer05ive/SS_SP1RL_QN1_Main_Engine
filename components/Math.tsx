"use client";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

export function M({ children }: { children: string }) {
  // inline math: $...$
  return <Latex>{children}</Latex>;
}

export function MBlock({ children }: { children: string }) {
  // display math: $$...$$
  return <div className="my-2"><Latex>{children}</Latex></div>;
}
