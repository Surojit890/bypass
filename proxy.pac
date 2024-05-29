function FindProxyForURL(url, host) {
  var valorantBypass = "*.valorant.com";

  if (host.endsWith(valorantBypass.substring(1))) {
    return "DIRECT";
  }

  return "PROXY proxy.example.com:8080";
}
