# Snowfox

A minimal, privacy-focused web browser. Snowfox ships with a dark theme,
[SearXNG](https://searxng.org/) as the default search engine, and a set of
privacy extensions installed on first run.

## Features

- Dark, floating-tab interface out of the box
- SearXNG metasearch by default (no tracking, no ads)
- Privacy extensions auto-installed: uBlock Origin, WebRTC leak protection,
  tracker blocking, and more
- Telemetry, Pocket, and sponsored content disabled by policy
- No accounts, no first-run upsell pages

## Download

Grab the latest build for your platform from the
[Releases](../../releases) page:

| Platform | File | How to run |
|----------|------|------------|
| Windows  | `Snowfox-win64.zip`        | Unzip and run `firefox.exe` |
| macOS    | `Snowfox.dmg`             | Open and drag Snowfox to Applications |
| Linux    | `Snowfox-x86_64.AppImage` | `chmod +x` the file, then run it |

Builds are unsigned, so Windows SmartScreen and macOS Gatekeeper may warn on
first launch.

## Build from source

Snowfox builds the same way as the upstream Mozilla platform.

```sh
./mach bootstrap   # one-time: install build dependencies
./mach build
./mach run
```

The branding, default search, theme, and policies live in:

- `mozconfig` — selects the Snowfox branding
- `browser/branding/snowfox/` — icons, colors, and brand strings
- `browser/app/distribution/policies.json` — search engine, extensions, privacy

## License

Snowfox is released under the
[Mozilla Public License 2.0](./LICENSE) and is built on the Mozilla source
platform.
