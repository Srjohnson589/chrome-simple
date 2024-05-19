

// This is the service worker that will route to our different scripts

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.action) {
      case 'initialIconClicked':
        console.log('Initial icon clicked!');
        sendResponse({ status: 'Initial icon action completed' });
        break;
      case 'icon1Clicked':
        console.log('Blue icon clicked!');
        sendResponse({ status: 'Icon 1 action completed' });
        break;
      case 'icon2Clicked':
        console.log('Green icon clicked!');
        sendResponse({ status: 'Icon 2 action completed' });
        break;
      case 'icon3Clicked':
        console.log('Yellow icon clicked!');
        sendResponse({ status: 'Icon 3 action completed' });
        break;
      default:
        console.log('Unknown action:', message.action);
    }
  });
  