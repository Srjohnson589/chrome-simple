console.log('Content script loaded');

// Create the floating icon
const icon = document.createElement('div');
icon.style.position = 'fixed';
icon.style.bottom = '10px';
icon.style.right = '10px';
icon.style.width = '50px';
icon.style.height = '50px';
icon.style.backgroundColor = 'red';
icon.style.borderRadius = '50%';
icon.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
icon.style.zIndex = '1000';
icon.style.cursor = 'pointer';

// Add click event to the icon
icon.addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'iconClicked' });
});

// Add the icon to the body
document.body.appendChild(icon);