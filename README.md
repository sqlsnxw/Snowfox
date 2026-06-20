# 🦊❄️ Snowfox

A custom, privacy-respecting web browser built on **Mozilla Firefox**.

## 📥 Download

Grab the latest build for your OS from the **[Releases page](https://github.com/sqlsnxw/Snowfox/releases)** — no cloning or building needed:

| OS | What to download | How to run |
|----|------------------|-----------|
| 🪟 **Windows** | the `.exe` installer | double-click it |
| 🍎 **macOS** | the `.dmg` | open it, drag Snowfox to Applications |
| 🐧 **Linux** | the `.tar.*` archive | extract it, run `./snowfox` |

> Builds are produced automatically by GitHub Actions (see `.github/workflows/release.yml`).
> They're currently **unsigned**, so your OS may warn you the first time you open Snowfox — that's expected; allow it to continue.
> *(No releases yet? Push a version tag like `v1.0.0` to trigger the first build — see "Cutting a release" below.)*

Snowfox is a *patch-based* fork: this repository **does not** contain the Firefox
source code. Instead it stores only Snowfox's own changes (patches, branding, and
build configuration) and downloads the upstream Firefox source at build time. This
keeps the repo tiny and easy to maintain — the same approach used by projects like
[Helium](https://github.com/imputnet/helium), LibreWolf, and Waterfox.

## How it works

```
Snowfox repo (small)            Mozilla servers (huge)
─────────────────────           ──────────────────────
patches/    ──┐
branding/     │   build/fetch.sh downloads
mozconfig     ├──────────────────────────────►  firefox-<version>.source.tar.xz
build/        │
              └─► apply-patches.sh ─► build.sh ─► your custom Firefox build
```

The full Firefox source (the ~55,000 files that *used* to live in this repo) is now
fetched only when you build, and never committed to git.

## Repository layout

| Path | Purpose |
|------|---------|
| `firefox_version.txt` | The exact upstream Firefox version Snowfox is built on. |
| `config/` | Privacy config: hardened prefs (`snowfox.cfg`) + auto-installed extensions (`policies.json`). |
| `patches/` | Snowfox's changes to Firefox, as `.patch` files (applied in order). |
| `branding/` | Snowfox names, logos, and branding assets. |
| `mozconfig` | Firefox build configuration. |
| `build/fetch.sh` | Downloads & extracts the pinned Firefox source. |
| `build/apply-patches.sh` | Applies every patch in `patches/`. |
| `build/build.sh` | Runs the full build (fetch → patch → compile). |
| `.github/workflows/build.yml` | CI that builds Snowfox on every push. |

## 🛡️ Privacy & built-in extensions

Snowfox is privacy-first, in the same spirit as **Mullvad Browser** and **LibreWolf**.
Crucially, the anti-fingerprinting comes from **hardened browser preferences, not a pile
of extensions** — every extra/unique add-on actually makes a browser *more* identifiable,
so Snowfox keeps the extension set minimal and uniform.

**Hardened defaults** (`config/snowfox.cfg`, applied via autoconfig):
- `privacy.resistFingerprinting` + fingerprinting protection + letterboxing
- All telemetry / phone-home disabled and **locked**
- Total Cookie Protection, strict tracking protection, WebRTC IP-leak protection
- DNS-over-HTTPS via Mullvad, no prefetch/predictor, reduced referer/metadata leakage

**Bundled extensions** (`config/policies.json`, auto-installed on first run):
| Extension | Mode | Purpose |
|-----------|------|---------|
| **uBlock Origin** | force-installed | Tracker/ad/content blocking |
| **ClearURLs** | force-installed | Strips tracking parameters from links |
| **Mullvad extension** | installed (removable) | Proxy/privacy companion (needs a Mullvad subscription) |
| **NoScript** | installed (removable) | Per-site script control — note: blocks scripts by default |
| **User-Agent Switcher** | installed (removable) | Manual UA spoofing when you want it |
| **Multi-Account Containers** | installed (removable) | Isolate sites into separate cookie jars |

**Ephemerality & transport:** clear-on-shutdown (cache/history/sessions), memory-only cache,
Encrypted Client Hello (ECH), HTTPS-Only, DNS-over-HTTPS.

## 🎨 UI theme

Snowfox ships a sleek, animated interface (`ui/userChrome.css`): rounded floating address bar,
smooth tab transitions, lift-on-hover toolbar buttons, and a fox-orange accent. It's installed
into the default profile at build time and enabled via `toolkit.legacyUserProfileCustomizations.stylesheets`.

> ⚠️ These take effect in **new builds** — an already-installed Snowfox won't retroactively
> gain them. Rebuild (or reinstall the next release) to pick them up.

## Building locally

> ⚠️ Building Firefox from source is heavy: it needs ~40 GB free disk, a lot of RAM,
> and can take 30–90+ minutes. See the
> [Firefox build docs](https://firefox-source-docs.mozilla.org/setup/) for host setup.

```bash
git clone https://github.com/sqlsnxw/Snowfox.git
cd Snowfox
./build/build.sh
```

This will download Firefox (pinned in `firefox_version.txt`), apply the patches in
`patches/`, and compile. The finished build lands in `work/firefox-*/obj-*/dist/`.

## Updating the Firefox base

1. Edit `firefox_version.txt` to the new version (e.g. `141.0esr`).
2. Re-run `./build/build.sh`. If a patch no longer applies cleanly, fix it under
   `patches/` and re-run.

Snowfox tracks **Firefox ESR** by default (currently `140.12.0esr`) for a stable,
roughly-yearly cadence. To follow mainline stable instead, set the version to a
normal release like `152.0.1`.

## Cutting a release (publishing downloads)

Releases are built and published automatically by `.github/workflows/release.yml`.
To create downloadable Windows/macOS/Linux builds:

```bash
git tag v1.0.0
git push origin v1.0.0
```

GitHub Actions then builds all three platforms and attaches the installers to a new
[Release](https://github.com/sqlsnxw/Snowfox/releases). You can also trigger it
manually from the **Actions** tab.

> ⚠️ Heads-up: full Firefox builds are resource-heavy and may exceed GitHub's free
> runner limits — if so, use larger/self-hosted runners. For installs without an
> "unidentified developer" warning, add code-signing certificates (Apple notarization
> for macOS, an Authenticode cert for Windows) as repo secrets and wire up signing.

## License

Snowfox's own files (build scripts, patches, branding config) are released under the
MIT License — see [`LICENSE`](LICENSE). The Firefox source that gets downloaded at
build time is © Mozilla and licensed under the
[Mozilla Public License 2.0](https://www.mozilla.org/MPL/2.0/). Snowfox is **not**
affiliated with or endorsed by Mozilla. "Firefox" is a trademark of the Mozilla
Foundation; Snowfox uses its own branding (see `branding/`) to comply with Mozilla's
trademark policy.
