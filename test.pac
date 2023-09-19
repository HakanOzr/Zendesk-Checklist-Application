function FindProxyForURL(url, host) {
  // Block access to all websites except http://php.testsparker.com/
  if (shExpMatch(host, "php.testsparker.com")) {
    return "DIRECT";
  }

  // Deny access to all other websites
  return "PROXY 3.68.233.12:3169";
}


