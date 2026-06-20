/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This file contains branding-specific prefs.

pref("startup.homepage_override_url", "");
pref("startup.homepage_welcome_url", "about:welcome");
pref("startup.homepage_welcome_url.additional", "");
// Interval: Time between checks for a new version (in seconds)
pref("app.update.interval", 21600); // 6 hours
// Give the user x seconds to react before showing the big UI. default=192 hours
pref("app.update.promptWaitTime", 691200);
// app.update.url.manual: URL user can browse to manually if for some reason
// all update installation attempts fail.
// app.update.url.details: a default value for the "More information about this
// update" link supplied in the "An update is available" page of the update
// wizard.
#if MOZ_UPDATE_CHANNEL == beta
  pref("app.update.url.manual", "https://www.mozilla.org/%LOCALE%/firefox/beta?reason=manual-update");
  pref("app.update.url.details", "https://www.mozilla.org/%LOCALE%/firefox/beta/notes");
  pref("app.releaseNotesURL", "https://www.firefox.com/%LOCALE%/firefox/%VERSION%beta/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=whatsnew");
  pref("app.releaseNotesURL.aboutDialog", "https://www.firefox.com/%LOCALE%/firefox/%VERSION%beta/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=about-dialog");
#elifdef MOZ_ESR
  pref("app.update.url.manual", "https://www.mozilla.org/%LOCALE%/firefox/enterprise?reason=manual-update");
  pref("app.update.url.details", "https://www.mozilla.org/%LOCALE%/firefox/organizations/notes");
  pref("app.releaseNotesURL", "https://www.firefox.com/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=whatsnew");
  pref("app.releaseNotesURL.aboutDialog", "https://www.firefox.com/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=about-dialog");
#else
  pref("app.update.url.manual", "https://www.mozilla.org/%LOCALE%/firefox/new?reason=manual-update");
  pref("app.update.url.details", "https://www.mozilla.org/%LOCALE%/firefox/notes");
  pref("app.releaseNotesURL", "https://www.firefox.com/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=whatsnew");
  pref("app.releaseNotesURL.aboutDialog", "https://www.firefox.com/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=about-dialog");
#endif
pref("app.releaseNotesURL.prompt", "https://www.firefox.com/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=updateprompt");

// The number of days a binary is permitted to be old
// without checking for an update.  This assumes that
// app.update.checkInstallTime is true.
pref("app.update.checkInstallTime.days", 63);

// Give the user x seconds to reboot before showing a badge on the hamburger
// button. default=4 days
pref("app.update.badgeWaitTime", 345600);

// Number of usages of the web console.
// If this is less than 5, then pasting code into the web console is disabled
pref("devtools.selfxss.count", 0);

// ═══════════════════════════════════════════════════════════════
// Snowfox defaults — shipped with every build (all platforms)
// ═══════════════════════════════════════════════════════════════

// Appearance — compact dark UI, custom stylesheets enabled
pref("browser.uidensity", 1);
pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");
pref("ui.systemUsesDarkTheme", 1);
pref("layout.css.prefers-color-scheme.content-override", 0);
pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
pref("browser.tabs.inTitlebar", 1);

// Layout — revamped sidebar (vertical/horizontal tabs both available)
pref("sidebar.revamp", true);
pref("sidebar.main.tools", "");
pref("browser.tabs.tabmanager.enabled", false);

// Hide the assistant controls section and the Backup feature
pref("browser.preferences.aiControls", false);
pref("browser.preferences.aiControls.showUnavailable", false);
pref("browser.backup.enabled", false);
pref("browser.backup.scheduled.enabled", false);
pref("browser.backup.preferences.ui.enabled", false);

// Disable built-in chat, suggestion, and smart tab-grouping features
pref("browser.ml.enable", false);
pref("browser.ml.chat.enabled", false);
pref("browser.ml.chat.sidebar", false);
pref("browser.ml.chat.shortcuts", false);
pref("browser.ml.chat.shortcuts.custom", false);
pref("browser.ml.chat.page", false);
pref("browser.ml.linkPreview.enabled", false);
pref("browser.tabs.groups.smart.enabled", false);
pref("browser.tabs.groups.smart.userEnabled", false);
pref("extensions.ml.enabled", false);
pref("browser.urlbar.suggest.quickactions", false);

// Camera / microphone / location blocked by default (2 = deny)
pref("permissions.default.camera", 2);
pref("permissions.default.microphone", 2);
pref("permissions.default.geo", 2);
pref("permissions.default.desktop-notification", 2);
pref("media.navigator.enabled", false);
pref("media.peerconnection.enabled", false);

// Trim bloat — no sponsored suggestions, no Suggest
pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
pref("browser.urlbar.quicksuggest.enabled", false);
pref("browser.urlbar.suggest.trending", false);
pref("browser.urlbar.suggest.weather", false);

// Tracking protection
pref("privacy.trackingprotection.enabled", true);
pref("privacy.trackingprotection.socialtracking.enabled", true);
pref("privacy.trackingprotection.fingerprinting.enabled", true);
pref("privacy.trackingprotection.cryptomining.enabled", true);

// Telemetry off
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.unified", false);
pref("toolkit.telemetry.server", "");
pref("browser.ping-centre.telemetry", false);

// New tab — no sponsored / pocket
pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
pref("browser.newtabpage.activity-stream.showSponsored", false);
pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
pref("browser.newtabpage.activity-stream.feeds.topsites", false);
pref("browser.newtabpage.activity-stream.feeds.snippets", false);
pref("browser.newtabpage.activity-stream.telemetry", false);
pref("extensions.pocket.enabled", false);

// No prefetch / speculation
pref("network.dns.disablePrefetch", true);
pref("network.prefetch-next", false);
pref("network.predictor.enabled", false);

// HTTPS-only, no geolocation
pref("dom.security.https_only_mode", true);
pref("geo.enabled", false);
pref("browser.shell.checkDefaultBrowser", false);

// Anti-fingerprinting — uniform, generic profile (letterboxing off)
pref("privacy.resistFingerprinting", true);
pref("privacy.resistFingerprinting.letterboxing", false);
pref("privacy.fingerprintingProtection", true);
pref("privacy.fingerprintingProtection.pbmode", true);
pref("webgl.disabled", true);
pref("media.eme.enabled", false);
pref("dom.battery.enabled", false);
pref("device.sensors.enabled", false);
pref("dom.gamepad.enabled", false);
pref("dom.vr.enabled", false);
pref("javascript.use_us_english_locale", true);
pref("intl.accept_languages", "en-US, en");
pref("intl.regional_prefs.use_os_locales", false);

// Least metadata on the wire
pref("network.http.referer.XOriginPolicy", 2);
pref("network.http.referer.XOriginTrimmingPolicy", 2);
pref("network.http.referer.trimmingPolicy", 2);
pref("network.http.sendRefererHeader", 2);
pref("browser.send_pings", false);
pref("beacon.enabled", false);
pref("network.http.speculative-parallel-limit", 0);
pref("browser.urlbar.speculativeConnect.enabled", false);
pref("network.dns.disablePrefetchFromHTTPS", true);
pref("network.predictor.enable-prefetch", false);
pref("privacy.globalprivacycontrol.enabled", true);
pref("privacy.globalprivacycontrol.functionality.enabled", true);

// Tracker blocking — ETP Strict + Total Cookie Protection
pref("browser.contentblocking.category", "strict");
pref("privacy.trackingprotection.pbmode.enabled", true);
pref("privacy.trackingprotection.emailtracking.enabled", true);
pref("privacy.query_stripping.enabled", true);
pref("privacy.query_stripping.enabled.pbmode", true);
pref("network.cookie.cookieBehavior", 5);
pref("privacy.partition.network_state", true);
pref("privacy.partition.serviceWorkers", true);

// Optional Tor routing — pre-wired SOCKS5, OFF by default (type 0).
// Requires a local Tor daemon on 127.0.0.1:9050; set network.proxy.type=1.
pref("network.proxy.type", 0);
pref("network.proxy.socks", "127.0.0.1");
pref("network.proxy.socks_port", 9050);
pref("network.proxy.socks_version", 5);
pref("network.proxy.socks_remote_dns", true);
pref("network.proxy.allow_hijacking_localhost", true);

// Faster browsing
pref("gfx.webrender.all", true);
pref("network.http.max-connections", 1800);
pref("network.http.max-persistent-connections-per-server", 10);
pref("network.http.pacing.requests.enabled", false);
pref("network.dnsCacheEntries", 20000);
pref("network.dnsCacheExpiration", 3600);
pref("content.notify.interval", 100000);
pref("browser.cache.memory.capacity", 1048576);
