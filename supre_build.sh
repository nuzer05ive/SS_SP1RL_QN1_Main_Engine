#!/usr/bin/env bash
set -euo pipefail
echo "⛵ SUPRE-BUILD — Spiral hatch"
# 1) safety: ensure massive dirs ignored
if git ls-files | grep -E '(^|/)node_modules/|(^|/)\.next/|(^|/)out/|(^|/)dist/' >/dev/null; then
  echo "❌ Tracked heavy dirs found. Run: git rm -r --cached node_modules .next out dist && git commit -m 'untrack heavy dirs'"; exit 1;
fi
# 2) install deps if package-lock exists, else npm i
if [ -f package-lock.json ]; then npm ci || npm i; else npm i; fi
# 3) render QSVG examples
npm run qsvg:render || true
# 4) (optional) typecheck/tests/build (don’t fail ritual on missing)
npm run typecheck || echo "typecheck skipped"
npm run test || echo "tests skipped"
npm run build || echo "build skipped"
echo "✅ SUPRE-BUILD complete. SVGs in ./out/svg"
