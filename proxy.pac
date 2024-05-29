// function FindProxyForURL(url, host) {
//     // List of domains related to Valorant and Riot Games that should bypass the proxy
//     var valorantDomains = [
//         "*.riotgames.com",
//         "*.valorant.com",
//         "*.riotcdn.net"
//     ];

//     // Bypass proxy for the specified Valorant domains
//     for (var i = 0; i < valorantDomains.length; i++) {
//         if (shExpMatch(host, valorantDomains[i])) {
//             return "DIRECT";
//         }
//     }

//     // Use proxy for all other traffic
//     return "PROXY proxy.example.com:8080";
// // 

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
