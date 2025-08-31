#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
echo "🔎 Husky: running lint & tests…"
npm run lint
npm run test -- --run
