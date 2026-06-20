// Tells Firefox/Snowfox to load snowfox.cfg (autoconfig) at startup.
// This file is installed to <app>/defaults/pref/autoconfig.js
pref("general.config.filename", "snowfox.cfg");
pref("general.config.obscure_value", 0);   // 0 = snowfox.cfg is plain text (not byte-shifted)
pref("general.config.sandbox_enabled", false);
