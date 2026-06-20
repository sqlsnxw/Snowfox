#!/usr/bin/env bash
# Full Snowfox build: fetch Firefox -> apply patches -> compile.
#
# Requirements: a working Firefox build environment.
#   https://firefox-source-docs.mozilla.org/setup/
# Heavy: needs ~40GB disk, plenty of RAM, and 30-90+ minutes.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VERSION="$(tr -d '[:space:]' < "$ROOT/firefox_version.txt")"
SRC_DIR="$ROOT/work/firefox-$VERSION"

"$ROOT/build/fetch.sh"
"$ROOT/build/apply-patches.sh"

echo "▶ Installing Snowfox mozconfig..."
cp "$ROOT/mozconfig" "$SRC_DIR/mozconfig"

cd "$SRC_DIR"

if [ ! -x "./mach" ]; then
  echo "✗ ./mach not found in source tree." >&2
  exit 1
fi

echo "▶ Bootstrapping build environment (may prompt to install deps)..."
./mach --no-interactive bootstrap --application-choice=browser || \
  echo "ℹ bootstrap skipped/failed — continuing (run it manually if the build fails)."

echo "▶ Building Snowfox (this takes a while)..."
./mach build

echo "▶ Installing Snowfox privacy config (prefs + extensions policy)..."
"$ROOT/build/install-config.sh"

echo "▶ Packaging..."
./mach package

echo "✓ Done."
echo "  Run it with:        cd \"$SRC_DIR\" && ./mach run"
echo "  Packaged build in:  $SRC_DIR/obj-snowfox/dist/"
