#!/usr/bin/env bash
# Apply every patch in patches/ (in sorted order) to the fetched Firefox source.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VERSION="$(tr -d '[:space:]' < "$ROOT/firefox_version.txt")"
SRC_DIR="$ROOT/work/firefox-$VERSION"
PATCH_DIR="$ROOT/patches"

if [ ! -d "$SRC_DIR" ]; then
  echo "✗ Firefox source not found at $SRC_DIR — run build/fetch.sh first." >&2
  exit 1
fi

shopt -s nullglob
patches=("$PATCH_DIR"/*.patch)
if [ ${#patches[@]} -eq 0 ]; then
  echo "ℹ No patches found in $PATCH_DIR — building stock Firefox."
  exit 0
fi

# Also copy any branding assets into place before patching, if present.
if [ -d "$ROOT/branding" ] && [ -n "$(ls -A "$ROOT/branding" 2>/dev/null)" ]; then
  echo "▶ Syncing branding/ into source tree..."
  mkdir -p "$SRC_DIR/browser/branding/snowfox"
  cp -r "$ROOT/branding/." "$SRC_DIR/browser/branding/snowfox/" || true
fi

for p in "${patches[@]}"; do
  echo "▶ Applying $(basename "$p")"
  patch -d "$SRC_DIR" -p1 < "$p"
done

echo "✓ Applied ${#patches[@]} patch(es)."
