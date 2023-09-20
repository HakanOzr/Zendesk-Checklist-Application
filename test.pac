function FindProxyForURL(url, host) {
  if (shExpMatch(host, "php.testsparker.com")) {
    return "DIRECT";
  }

  return "PROXY 3.68.233.12:3169";
}
