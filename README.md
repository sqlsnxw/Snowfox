# Snowfox

A privacy-focused web browser built on Firefox. The idea is simple: take Firefox,
strip out the tracking and telemetry, harden it against fingerprinting, and ship it
with sensible privacy defaults already turned on so you don't have to fiddle with
about:config for hours.

It's similar in spirit to Mullvad Browser and LibreWolf.

## Download

Grab the latest build from the [releases page](https://github.com/sqlsnxw/Snowfox/releases).

- Linux: download the `.AppImage`, `chmod +x` it, and run it.
- Windows: download the zip, extract it, and run `firefox.exe` inside the Snowfox folder.

## Why the repo is small

Snowfox doesn't keep a copy of the Firefox source in here. That would be gigabytes and
tens of thousands of files. Instead this repo only holds the things that make Snowfox
different from Firefox: the privacy config, the patches, the branding, and the build
scripts. The actual Firefox source gets downloaded when you build. Projects like Helium
and ungoogled-chromium work the same way.

## What's changed from stock Firefox

The interesting stuff lives in `config/`:

- `snowfox.cfg` is the hardening: resistFingerprinting, all telemetry off, tracking
  protection, DNS-over-HTTPS, HTTPS-only mode, clear-on-shutdown, and a pile of other
  prefs. This is where most of the privacy actually comes from.
- `policies.json` auto-installs the extensions on first run and locks down a few settings.

Search defaults to SearXNG, with DuckDuckGo as a second option.

Extensions that come pre-installed: uBlock Origin, ClearURLs, Mullvad, NoScript,
Multi-Account Containers, and a User-Agent switcher. A couple of those are removable
if you don't want them.

There's also a custom UI theme in `ui/userChrome.css` (rounded address bar, smooth tab
animations, a fox-orange accent).

## Building it yourself

Heads up: compiling Firefox is heavy. You need a lot of disk space and time, and a proper
build environment. See Mozilla's [build docs](https://firefox-source-docs.mozilla.org/setup/).

```
git clone https://github.com/sqlsnxw/Snowfox.git
cd Snowfox
./build/build.sh
```

That fetches the Firefox version pinned in `firefox_version.txt` (currently an ESR
release), applies the patches, bakes in the config, and packages it.

To cut a release with builds for all platforms, push a tag like `v1.0.0` and the GitHub
Actions workflow takes care of the rest.

## A note on the name

Snowfox isn't affiliated with Mozilla. "Firefox" is Mozilla's trademark, so Snowfox uses
its own name and logo. The Firefox source it's built on is licensed under the MPL 2.0.
