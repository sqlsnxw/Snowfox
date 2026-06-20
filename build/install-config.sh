#!/usr/bin/env bash
# Install Snowfox's privacy config (autoconfig prefs + enterprise policies) into the
# built application BEFORE packaging. Run this after `./mach build` and before
# `./mach package`. This keeps the config out of the Firefox source tree entirely.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VERSION="$(tr -d '[:space:]' < "$ROOT/firefox_version.txt")"
SRC="$ROOT/work/firefox-$VERSION"
DIST_BIN="$SRC/obj-snowfox/dist/bin"

if [ ! -d "$DIST_BIN" ]; then
  echo "✗ Build output not found at $DIST_BIN — run ./mach build first." >&2
  exit 1
fi

echo "▶ Installing autoconfig (hardened prefs)..."
install -Dm644 "$ROOT/config/snowfox.cfg"   "$DIST_BIN/snowfox.cfg"
install -Dm644 "$ROOT/config/autoconfig.js" "$DIST_BIN/defaults/pref/autoconfig.js"

echo "▶ Installing enterprise policies (extensions + locked privacy)..."
install -Dm644 "$ROOT/config/policies.json" "$DIST_BIN/distribution/policies.json"

echo "▶ Installing Snowfox UI theme (userChrome.css)..."
# Seed the theme into new profiles via the build's default profile template.
install -Dm644 "$ROOT/ui/userChrome.css" "$DIST_BIN/defaults/profile/chrome/userChrome.css"

echo "✓ Snowfox privacy config installed into $DIST_BIN"
echo "  - snowfox.cfg .............. anti-fingerprinting + telemetry-off prefs"
echo "  - distribution/policies.json  force-installs uBlock Origin + Mullvad extension"
