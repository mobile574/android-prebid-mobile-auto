function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.miso.saucelabs.com") ||
        shExpMatch(host, "saucelabs.com")) {
        // KGP and REST connections. Another proxy can also be specified.
        return "DIRECT";
    }

    // Test HTTP traffic, route it through the local BrowserMob proxy.
    return "PROXY 127.0.0.1:9091";
}