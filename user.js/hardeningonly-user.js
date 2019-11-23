//
//  ==============================
//  Hardening-only.js by CHEF-KOCH
//  ==============================
//      Newer than user.js, there are differences (on purpose)!
//      Version 71.1
//      FIXME: DoH, FPI & lang spoofing
//      Disabling VP9 Codec needs a userscript since FF 70+ to be effective.
//      https://greasyfork.org/en/scripts/373685-hide-vp9-support-from-youtube
//      https://greasyfork.org/en/scripts/390992-hide-hdr-support-from-youtube
//      https://addons.mozilla.org/en-US/firefox/addon/enhanced-h264ify/
//      Requirements: Firefox x64
//                    uBlock/uMatrix

// DOH 
// https://github.com/StevenBlack/hosts/issues/968
user_pref("network.trr.allow-rfc1918", true); 
user_pref("network.trr.blacklist-duration", 55);
//user_pref("network.trr.bootstrapAddress", "1.1.1.1"); //Cloudflare
user_pref("network.trr.builtin-excluded-domains", "localhost,local");
user_pref("network.trr.disable-ECS", true);
user_pref("network.trr.early-AAAA", true);
user_pref("network.trr.excluded-domains", "");
user_pref("network.trr.max-fails", 4);
//user_pref("network.trr.mode", 3); //https://blog.cloudflare.com/encrypt-that-sni-firefox-edition/ & https://wiki.mozilla.org/Trusted_Recursive_Resolver
user_pref("network.trr.request-timeout", 2660);
user_pref("network.trr.resolvers", '[{ "name": "Cloudflare", "url": "https://mozilla.cloudflare-dns.com/dns-query" },{ "name": "Quad9", "url": "https://dns.quad9.net/dns-query" },{"name": "AdGuard Default", "url": "https://dns.adguard.com/dns-query"},{ "name": "AdGuard Family Protection", "url": "https://dns-family.adguard.com/dns-query"},{"name": "Google", "url": "https://dns.google/dns-query"},{"name": "CleanBrowsing", "url": "https://doh.cleanbrowsing.org/doh/family-filter"},{"name": "PowerDNS", "url": "https://doh.powerdns.org"},{"name": "SecureDNS.eu", "url": "https://doh.securedns.eu/dns-query"},{"name": "DNSWarden AdBlocking", "url": "https://doh.dnswarden.com/adblock"},{"name": "Foundation for Applied Privacy", "url": "https://doh.appliedprivacy.net/query"},{"name": "BlahDNS Germany", "url": "https://doh-de.blahdns.com/dns-query"},{"name": "BlahDNS Japan", "url": "https://doh-jp.blahdns.com/dns-query"}]'); 
user_pref("network.trr.skip-AAAA-when-not-supported", true);
//user_pref("network.trr.uri", "https://cloudflare-dns.com/dns-query");
user_pref("network.trr.useGET", true);
user_pref("network.trr.wait-for-portal", false);

// IDN Punycode
// https://addons.mozilla.org/en-US/firefox/addon/idn-warner/
user_pref("network.IDN_show_punycode", true);

// PrivateBrowsing 
//user_pref("browser.privatebrowsing.autostart", true);

//PRF
// https://wiki.mozilla.org/Security/Fusion
// https://wiki.mozilla.org/Security/Tor_Uplift
//user_pref("privacy.firstparty.isolate.restrict_opener_access", false);
user_pref("intl.accept_languages", "en-US, en");
user_pref("javascript.use_us_english_locale", true); //https://hg.mozilla.org/mozilla-central/rev/52d635f2b33d
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.spoof_english", 2);

// FP
user_pref("privacy.resistFingerprinting.reduceTimerPrecision.microseconds", 1000);
user_pref("privacy.resistFingerprinting", false); // Master button for FP


// U2F (FF67+)
// https://www.nitrokey.com/documentation/enabling-u2f-firefox
user_pref("security.webauth.u2f", true); //default 


//Delegated Credentials Study Add-on
//user_pref("security.tls.enable_delegated_credentials", false);
user_pref("dc-experiment.branchTreatment", false);
user_pref("dc-experiment.hasRun", false);
user_pref("dc-experiment.host", "");
user_pref("dc-experiment.inCohort", false);
user_pref("shieldStudy.logLevel", "None");


// App updates, GMP etc
//user_pref("app.update.auto", true);
//user_pref("browser.cache.memory.enable", false);
user_pref("browser.cache.offline.insecure.enable", false);
//user_pref("browser.link.open_newwindow.restriction", 0);
//user_pref("browser.sessionstore.max_tabs_undo", 0);
//user_pref("dom.disable_beforeunload",  true);
//user_pref("dom.event.contextmenu.enabled", false);
//user_pref("dom.push.connection.enabled", false);
//user_pref("dom.storage.enabled", false);
//user_pref("media.gmp-provider.enabled", false);
user_pref("network.http.referer.XOriginPolicy", 2);
//user_pref("network.negotiate-auth.allow-insecure-ntlm-v1-https", false);
//user_pref("network.trr.confirmationNS", "example.com");
user_pref("network.gio.supported-protocols", "");
//user_pref("downloads.disable_button.edit_actions", true);
//user_pref("general.useragent.site_specific_overrides", true);
//user_pref("general.disable_button.default_browser", true);
//user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
//user_pref("privacy.resistFingerprinting.letterboxing", true);
//user_pref("security.cert_pinning.hpkp.enabled", false); //default
//user_pref("security.ssl.require_safe_negotiation", true);
//user_pref("signon.storeWhenAutocompleteOff", false);
user_pref("signon.showAutoCompleteOrigins", false);
user_pref("signon.includeOtherSubdomainsInLookup", false);
//user_pref("xpinstall.signatures.required", true);
user_pref("app.normandy.shieldLearnMoreUrl", "");
user_pref("app.update.enabled", true);
user_pref("breakpad.reportURL", "");
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("browser.bookmarks.max_backups", 0);
user_pref("browser.cache.disk_cache_ssl", false);
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.discovery.containers.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.discovery.sites", ""); //https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/collection/hybrid-content.html
user_pref("browser.download.folderList", 2);
user_pref("browser.download.manager.retention", 0);
user_pref("browser.download.saveLinkAsFilenameTimeout", 0);
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.fixup.hide_user_pass", true);
user_pref("browser.formfill.enable", false);
user_pref("browser.formfill.expire_days", 0);
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtab.url", "about:blank");
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", false);
user_pref("browser.newtabpage.activity-stream.asrouter.useRemoteL10n", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.campaign.blocks", "{}");
user_pref("browser.newtabpage.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.filterAdult", true);
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "");
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "data:text/plain,{}");
user_pref("browser.offline-apps.notify", true);
user_pref("browser.onboarding.enabled", false);
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("browser.ping-centre.production.endpoint", "");
user_pref("browser.ping-centre.staging.endpoint", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.pocket.enabled", false);
user_pref("browser.safebrowsing.reportPhishURL", false);
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("browser.selfsupport.url", "");
user_pref("browser.send_pings.require_same_host", true);
user_pref("browser.sessionstore.max_windows_undo", 0);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.shell.shortcutFavicons", false);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.ssl_override_behavior", 1);
user_pref("browser.startup.firstrunSkipsHomepage", false);
user_pref("browser.startup.homepage_override.buildID", "20100101");
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.startup.page", 0);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("browser.urlbar.autocomplete.enabled", false);
user_pref("browser.urlbar.autoFill.typed", false);
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.filter.javascript", true);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("camera.control.autofocus_moving_callback.enabled", false);
user_pref("camera.control.face_detection.enabled", false);
user_pref("clipboard.autocopy", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("device.sensors.enabled", false);
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.force-local", true);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("dom.allow_cut_copy", false);
user_pref("dom.archivereader.enabled", false);
user_pref("dom.enable_performance_navigation_timing", false);
user_pref("dom.enable_performance", false);
user_pref("dom.enable_resource_timing", false);
user_pref("dom.enable_user_timing", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("dom.flyweb.enabled", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.idle-observers-api.enabled", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.maxHardwareConcurrency", 2);
user_pref("dom.min_timeout_value", 4);
user_pref("dom.mozTCPSocket.enabled", false);
user_pref("dom.netinfo.enabled", false);
user_pref("dom.network.enabled", false);
user_pref("dom.payments.request.supportedRegions", "US,CA");
user_pref("dom.security.featurePolicy.enabled", true);
user_pref("dom.serviceWorkers.enabled", true);
user_pref("dom.telephony.enabled", false);
user_pref("dom.vibrator.enabled", false);
user_pref("dom.vr.enabled", false);
user_pref("dom.webaudio.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled ", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("extensions.fxmonitor.enabled", false);
user_pref("extensions.getAddons.discovery.api_url", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.screenshots.disabled", true);
user_pref("extensions.screenshots.upload-disabled", true);
user_pref("extensions.ui.lastCategory", "addons://list/extension");
user_pref("general.buildID.override", "20100101");
user_pref("geo.enabled", false);
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("gfx.webrender.picture-caching", false);
user_pref("intl.charset.fallback.override", "windows-1252"); 
user_pref("intl.locale.matchOS", false);
user_pref("javascript.options.asmjs", false);
user_pref("javascript.options.ion", false);
user_pref("javascript.options.wasm", false);
user_pref("layout.css.visited_links_enabled", false);
user_pref("lightweightThemes.update.enabled", false);
user_pref("loop.enabled", false);
user_pref("loop.logDomains", false);
user_pref("media.autoplay.allow-muted", false);
user_pref("media.autoplay.ask-permission", true);
user_pref("media.autoplay.default", 2);
user_pref("media.autoplay.enabled.user-gestures-needed", true); 
user_pref("media.cache_size", 0);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.gmp-manager.url", "");
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.video_stats.enabled", false);
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled", false);
user_pref("media.webrtc.hw.h264.enabled", true);
user_pref("media.peerconnection.dtls.version.max", 771);
user_pref("media.peerconnection.dtls.version.min", 770);
user_pref("middlemouse.paste", false);
user_pref("network.allow-experiments", false);
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.dns.blockDotOnion", true);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);
user_pref("network.http.keep-alive.timeout", 45);
user_pref("network.http.referer.spoofSource", true);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.jar.open-unsafe-types", false);
user_pref("network.manage-offline-status", false);
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1", false);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.protocol-handler.expose-all", false);
user_pref("network.protocol-handler.expose.about", true);
user_pref("network.protocol-handler.expose.blob", true);
user_pref("network.protocol-handler.expose.chrome", true);
user_pref("network.protocol-handler.expose.data", true);
user_pref("network.protocol-handler.expose.file", true);
user_pref("network.protocol-handler.expose.ftp", true);
user_pref("network.protocol-handler.expose.http", true);
user_pref("network.protocol-handler.expose.https", true);
user_pref("network.protocol-handler.expose.javascript", true);
user_pref("network.protocol-handler.expose.moz-extension", true);
user_pref("network.protocol-handler.external.about", false);
user_pref("network.protocol-handler.external.blob", false);
user_pref("network.protocol-handler.external.chrome", false);
user_pref("network.protocol-handler.external.data", false);
user_pref("network.protocol-handler.external.file", false);
user_pref("network.protocol-handler.external.ftp", false);
user_pref("network.protocol-handler.external.http", false);
user_pref("network.protocol-handler.external.https", false);
user_pref("network.protocol-handler.external.javascript", false);
user_pref("network.protocol-handler.external.moz-extension", false);
user_pref("network.protocol-handler.warn-external-default", true);
user_pref("network.security.esni.enabled", true);
user_pref("network.stricttransportsecurity.preloadlist", true);
user_pref("offline-apps.allow_by_default", false);
user_pref("offline-apps.quota.warn", 0);
user_pref("pdfjs.enableWebGL", false);
user_pref("permissions.default.geo", 2);
user_pref("places.history.enabled", false);
user_pref("plugin.default.state", 0);
user_pref("plugin.scan.plid.all", false);
user_pref("plugin.state.flash", 0);
user_pref("plugin.state.java", 0);
user_pref("plugin.state.libgnome-shell-browser-plugin", 0);
user_pref("plugins.click_to_play", true);
user_pref("plugins.enumerables_names", "");
user_pref("plugins.update.notifyUser", true);
user_pref("pref.privacy.disable_button.view_passwords_exceptions", true);
user_pref("pref.privacy.disable_button.view_passwords", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.openWindows", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.donottrackheader.enabled", false);
user_pref("privacy.history.custom", true);
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.sanitize.timeSpan", 0);
user_pref("privacy.storagePrincipal.enabledForTrackers", false);
user_pref("privacy.trackingprotection.cryptomining.enabled", false);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.annotate.enabled", false);
user_pref("privacy.trackingprotection.fingerprinting.enabled", false);
user_pref("privacy.trackingprotection.origin_telemetry.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.longPressBehavior", 2);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("reader.parse-on-load.enabled", false);
user_pref("security.ask_for_password", 2);
user_pref("security.block_importScripts_with_wrong_mime", true);
user_pref("security.block_Worker_with_wrong_mime", true);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.certerrors.mitm.auto_enable_enterprise_roots", true);
user_pref("security.dialog_enable_delay", 350);
user_pref("security.family_safety.mode", 0);
user_pref("security.fileuri.strict_origin_policy", true);
user_pref("security.identityblock.show_extended_validation", true);
user_pref("security.insecure_connection_icon.pbmode.enabled", true);
user_pref("security.insecure_connection_text.enabled", false);
user_pref("security.insecure_connection_text.pbmode.enabled", false);
user_pref("security.insecure_field_warning.contextual.enabled", true);
user_pref("security.insecure_password.ui.enabled", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.block_object_subrequest", true);
user_pref("security.OCSP.enabled", 0);
user_pref("security.OCSP.require", true);
user_pref("security.password_lifetime", 1);
user_pref("security.pki.sha1_enforcement_level", 1);
user_pref("security.secure_connection_icon_color_gray", false);
user_pref("security.sri.enable", true);
user_pref("security.ssl.disable_session_identifiers", true);
user_pref("security.ssl.enable_ocsp_must_staple", true);
user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.ssl3.dhe_dss_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256", true);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_gcm_sha384", true);
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", true);
user_pref("security.ssl3.ecdhe_ecdsa_chacha20_poly1305_sha256", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256", true);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_256_gcm_sha384", true);
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", true);
user_pref("security.ssl3.ecdhe_rsa_chacha20_poly1305_sha256", false);
user_pref("security.ssl3.rsa_aes_128_sha", true);
user_pref("security.ssl3.rsa_aes_256_sha", true);
user_pref("security.ssl3.rsa_des_ede3_sha", false);
user_pref("security.tls.version.enable-deprecated", false); // DO NOT set it to true
user_pref("security.tls.version.fallback-limit", 3);
user_pref("security.tls.version.max", 4);
user_pref("security.tls.version.min", 2); //3
user_pref("security.xpconnect.plugin.unrestricted", false);
user_pref("services.blocklist.update_enabled", true);
user_pref("shield.savant.enabled", false);
user_pref("signon.autofillForms.http", false);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.management.page.enabled", false);
user_pref("signon.rememberSignons", false);
user_pref("startup.homepage_override_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_welcome_url", "");
user_pref("svg.disabled", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.ecosystemtelemetry.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.infoURL", "");
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("trailhead.firstrun.branches", "");


//MathML 
user_pref("mathml.xlink.disabled", true);


//WebGL 
user_pref("webgl.dxgl.enabled", false);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
user_pref("webgl.enable-debug-renderer-info", false);
user_pref("webgl.enable-webgl2", false);
user_pref("webgl.min_capability_mode", true);


//Activity Stream 
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.asrouterExperimentEnabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.endpoints", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.endpointSpocsClear", "");
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "");
user_pref("browser.newtabpage.activity-stream.feeds.sections", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.systemtick", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.sectionOrder", "");
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.topSitesRows", 0);


//Search
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.hiddenOneOffs", "Google,Bing,Amazon.com,eBay,Twitter,Wikipedia (en)");
user_pref("browser.search.region", "US");
user_pref("browser.search.reset.enabled", false);
user_pref("browser.search.reset.status", "");
user_pref("browser.search.reset.whitelist", "");
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.update", false);
user_pref("browser.search.widget.inNavBar", true);
user_pref("browser.urlbar.oneOffSearches", false);
user_pref("keyword.enabled", false);


// Native implemented extension protection
user_pref("extensions.webextensions.base-content-security-policy", "");
user_pref("extensions.webextensions.default-content-security-policy", "");
user_pref("extensions.webextensions.restrictedDomains", "");


//Extensions
user_pref("extensions.blocklist.enabled", false);
user_pref("extensions.blocklist.url", "");
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.greasemonkey.stats.optedin", false);
user_pref("extensions.greasemonkey.stats.url", "");
user_pref("extensions.htmlaboutaddons.discover.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.recommendations.themeRecommendationUrl", "");
user_pref("extensions.shield-recipe-client.api_url", "");
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("extensions.systemAddon.update.enabled", false);
user_pref("extensions.update.enabled", true);
user_pref("extensions.webservice.discoverURL", "");
user_pref("extensions.cookiesBehavior.overrideOnTopLevel", false);


//DNS
user_pref("browser.fixup.alternate.enabled", false);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.dnsCacheEntries", 0);
user_pref("network.dnsCacheExpiration", 50);
user_pref("network.dnsCacheExpirationGracePeriod", 50);
user_pref("network.proxy.socks_remote_dns", true);


//Safe-Browsing
user_pref("browser.safebrowsing.appRepURL", ""); 
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", " ");
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");


//Webshare 
user_pref("dom.webshare.enabled", false);

//Dimming
user_pref("findbar.highlightAll", true);
//user_pref("findbar.modalHighlight", true);


// Sync (example how you sync each and every single entry)
//user_pref("services.sync.prefs.sync.preference_name", true);


// Userbility
user_pref("accessibility.typeaheadfind", false);
user_pref("browser.backspace_action", 2);
user_pref("browser.contentblocking.introCount", 20);
user_pref("browser.disableResetPrompt", true); 
user_pref("browser.download.autohideButton", true); //Immediately delete (hide) downloads
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
user_pref("browser.overlink-delay", 1);
user_pref("browser.protections_panel.enabled", false);
user_pref("browser.search.openintab", true);
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("browser.urlbar.delay", 10);
user_pref("browser.urlbar.trimURLs", false);
user_pref("permissions.default.desktop-notification", 2);
user_pref("toolkit.cosmeticAnimations.enabled", false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("media.hardwaremediakeys.enabled", true);


// Font
//user_pref("ayout.css.prefixes.font-features", false);
//user_pref("browser.display.use_document_fonts", 1); //0
//user_pref("font.blacklist.underline_offset", ""); //untouched
//user_pref("gfx.downloadable_fonts.woff2.enabled", false);
//user_pref("layout.css.font-loading-api.enabled", true); //false
user_pref("browser.display.use_document_fonts", 0);
user_pref("gfx.downloadable_fonts.disable_cache", true);
//user_pref("gfx.downloadable_fonts.enabled", false);
user_pref("gfx.font_rendering.graphite.enabled", false);
user_pref("gfx.font_rendering.opentype_svg.enabled", false);


//Abuse Report 
user_pref("extensions.abuseReport.amoDetailsURL", "https://services.addons.mozilla.org/api/v4/addons/addon/");
user_pref("extensions.abuseReport.amWebAPI.enabled", false);
user_pref("extensions.abuseReport.openDialog", false);


//Social Tracking 
user_pref("privacy.socialtracking.notification.counter", 0);
user_pref("privacy.socialtracking.notification.enabled", true);
user_pref("privacy.socialtracking.notification.lastShown", "0");
user_pref("privacy.socialtracking.notification.max", 2);
user_pref("privacy.socialtracking.notification.period.min", 0);
user_pref("privacy.socialtracking.notification.session.pageload.min", 0);


// Outdated (FF 72+), not privacy/security related - or already set to false (by default)
//user_pref("alerts.showFavicons", false);
//user_pref("browser.chrome.site_icons", true);
//user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
//user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
//user_pref("browser.send_pings", false);
//user_pref("dom.disable_window_open_feature.location", true);
//user_pref("dom.disable_window_open_feature.resizable", true);
//user_pref("dom.disable_window_open_feature.status", false);
//user_pref("dom.indexedDB.enabled", false);
//user_pref("extensions.autoDisableScopes", 14);
//user_pref("extensions.incognito.migrated", true);
//user_pref("media.webm.enabled", false);
//user_pref("network.http.referer.XOriginTrimmingPolicy", 0);
//user_pref("pdfjs.disabled", false);
//user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);
//user_pref("security.sandbox.content.read_path_whitelist", "");
//user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("app.productInfo.baseURL", false);
user_pref("app.normandy.api_url", ""); 
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.migrationsApplied", 8);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.update.silent", false);
user_pref("beacon.enabled", false);
user_pref("browser.altClickSave", true);
user_pref("browser.casting.enabled", false);
user_pref("browser.contentblocking.category", false);
user_pref("browser.newtabpage.activity-stream.prerender", false);
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.tabClipWidth", 93);
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.uidensity", 1);
user_pref("browser.urlbar.formatting.enabled", false);
user_pref("devtools.webide.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("experiments.activeExperiment", false); 
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("layout.word_select.eat_space_to_next_word", false);
user_pref("media.autoplay.enabled", false);
user_pref("media.block-autoplay-until-in-foreground", true);
user_pref("network.file.disable_unc_paths", true);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("pref.browser.homepage.disable_button.bookmark_page", true);
user_pref("pref.browser.homepage.disable_button.current_page", true);
user_pref("pref.browser.homepage.disable_button.restore_default", true);
user_pref("privacy.donottrackheader.value", 1);
user_pref("security.csp.enable", true);
user_pref("security.csp.experimentalEnabled", true);
user_pref("security.insecure_connection_icon.enabled", true);
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");
user_pref("shumway.disabled", true);
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.unified", false);
user_pref("webgl.disabled", true);


//EME
//EME free builds: https://ftp.mozilla.org/pub/firefox/releases/71.0b9/win64-EME-free/
// https://support.mozilla.org/en-US/kb/enable-drm
//user_pref("media.eme.enabled", false); 
//user_pref("media.gmp-gmpopenh264.autoupdate", false);
//user_pref("media.gmp-gmpopenh264.enabled", false);
//user_pref("media.gmp-gmpopenh264.provider.enabled", false);


// Lockdown aboutConfig + warnings (outdated)
//user_pref("general.aboutConfig.enable", false);
user_pref("general.warnOnAboutConfig", false);


// Optional params (as per own needs)
// "browser.uiCustomization.state" 
// "extensions.webextensions.uuids"
