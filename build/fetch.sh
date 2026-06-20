#!/usr/bin/env bash
# Download and extract the pinned Firefox source into work/.
# The Firefox source is NEVER committed to this repo — it lives only under work/.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VERSION="$(tr -d '[:space:]' < "$ROOT/firefox_version.txt")"
WORK="$ROOT/work"
SRC_DIR="$WORK/firefox-$VERSION"
TARBALL="firefox-$VERSION.source.tar.xz"
URL="https://archive.mozilla.org/pub/firefox/releases/$VERSION/source/$TARBALL"

mkdir -p "$WORK"

if [ -d "$SRC_DIR" ]; then
  echo "✓ Firefox $VERSION source already present at $SRC_DIR"
  exit 0
fi

echo "▶ Downloading Firefox $VERSION source..."
echo "  $URL"
curl -fL --retry 3 -o "$WORK/$TARBALL" "$URL"

echo "▶ Extracting..."
mkdir -p "$SRC_DIR"
tar -xf "$WORK/$TARBALL" -C "$SRC_DIR" --strip-components=1
rm -f "$WORK/$TARBALL"

echo "✓ Firefox $VERSION source ready at $SRC_DIR"
