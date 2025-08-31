#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { basename, resolve } from "node:path";
import { qsvgToSvg } from "./qsvg-to-svg.mjs";

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: node tools/qsvg-render.mjs <file1.qsvg.json> [file2...] [-o out/svg]");
  process.exit(1);
}
let outDir = "out/svg";
const files = [];
for (let i=0;i<args.length;i++){
  if (args[i] === "-o" || args[i] === "--out"){ outDir = args[++i] || outDir; }
  else { files.push(args[i]); }
}
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

for (const f of files){
  const src = JSON.parse(readFileSync(f,"utf8"));
  const svg = qsvgToSvg(src);
  const name = basename(f).replace(/\.qsvg\.json$/i,"") + ".svg";
  const outPath = resolve(outDir, name);
  writeFileSync(outPath, svg, "utf8");
  console.log("✓ rendered", outPath);
}
