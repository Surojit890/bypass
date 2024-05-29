

function FindProxyForURL(url, host) {
    // List of domains that should bypass the proxy
    var directAccess = [
        "*.riotgames.com",
        "*.valorant.com",
        "*.riotcdn.net",
        "*.pvp.net",
        "*.example1.com",
        "*.example2.com",
        "*.example3.com"
    ];

    // Bypass proxy for the specified domains
    for (var i = 0; i < directAccess.length; i++) {
        if (shExpMatch(host, directAccess[i])) {
            return "DIRECT";
        }
    }

    // Use proxy for all other traffic
    return "PROXY proxy.example.com:8080";
}
