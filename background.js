chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'iconClicked') {
      // Perform some action when the icon is clicked
      console.log('Floating icon clicked!');
      // You can also open a popup or send a response back to the content script
    }
  });