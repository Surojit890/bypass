function FindProxyForURL(url, host) {
  var directAccess = [
    "*.riotgames.com",
    "*.valorant.com",
    "*.riotcdn.net",
    "*.pvp.net",
    "*.example1.com",
    "*.example2.com",
    "*.example3.com",
    "*.github.com",
    "*.stackoverflow.com",
    "*.google.com",
    "*.youtube.com"
  ];

  for (var i = 0; i < directAccess.length; i++) {
    if (host.endsWith(directAccess[i].substring(1))) {
      return "DIRECT";
    }
  }

  return "PROXY proxy.example.com:8080";
}
