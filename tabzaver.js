browser.browserAction.onClicked.addListener(async () => {
  const tabs = await browser.tabs.query({ currentWindow: true });
  const urls = tabs.map(tab => tab.url && tab.url.toString());
  const urlsText = urls.join("\n");
  await navigator.clipboard.writeText(urlsText);
});
