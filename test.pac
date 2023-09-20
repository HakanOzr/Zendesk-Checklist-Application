function FindProxyForURL(url, host) {
  if (shExpMatch(host, "php.testsparker.com")) {
    return "DIRECT";
  }

  return "PROXY localhost:9090";
}
