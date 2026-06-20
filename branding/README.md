# Snowfox branding

Put Snowfox's branding assets here. During the build, `apply-patches.sh` copies the
contents of this folder into `browser/branding/snowfox/` in the Firefox source tree,
and `mozconfig` can point the build at it via `--with-branding=browser/branding/snowfox`.

Typical files a Firefox branding directory contains:

| File | Purpose |
|------|---------|
| `default16.png` … `default128.png` | App icons at various sizes |
| `firefox.icns` / `firefox.ico` | macOS / Windows app icons |
| `content/about-logo.png` | Logo shown on about pages |
| `locales/en-US/brand.ftl` | Brand strings (product name, vendor) |
| `configure.sh` | Branding metadata (MOZ_APP_DISPLAYNAME, etc.) |

See Firefox's own branding dirs (`browser/branding/nightly`, `browser/branding/official`)
in the fetched source under `work/firefox-<version>/` for working examples to copy.

> **Trademark note:** Do not ship Mozilla's Firefox logos or the "Firefox" name.
> Use your own Snowfox artwork here so the build complies with Mozilla's
> trademark policy.
