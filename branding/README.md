# Branding

Snowfox's icons and brand assets live here. When you do a source build, point the build
at this folder with `--with-branding=browser/branding/snowfox` and it'll use these instead
of the default Firefox branding.

- `default16.png` through `default512.png` are the app icons at the sizes Firefox needs.
- `content/` has the about-page logos.
- `firefox.ico` is the Windows icon, `configure.sh` sets the app name, and
  `locales/en-US/brand.ftl` holds the brand strings (the name shown in menus, titles, etc).

Don't ship Mozilla's Firefox logos here, that's the whole point of having our own set.
