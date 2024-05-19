// contentScript.js

console.log('Content script loaded');

//create icon
function createIcon(id, bottom, right, color) {
  const icon = document.createElement('div');
  icon.id = id;
  icon.style.position = 'fixed';
  icon.style.bottom = bottom;
  icon.style.right = right;
  icon.style.width = '50px';
  icon.style.height = '50px';
  icon.style.backgroundColor = color;
  icon.style.borderRadius = '50%';
  icon.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
  icon.style.zIndex = '1000';
  icon.style.cursor = 'pointer';
return icon;
}

function handleIconClick(icon, message) {
  icon.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: message }, (response) => {
      console.log(`${message} icon clicked:`, response);
    });
  });
}

// Create the initial icon
const initialIcon = createIcon('initialIcon', '10px', '10px', 'blue');

// Add click event to the initial icon to show additional icons
initialIcon.addEventListener('click', () => {
  showAdditionalIcons();
});

// Add the initial icon to the body
document.body.appendChild(initialIcon);

// Function to show additional icons
function showAdditionalIcons() {
  // Import additional modules if needed
    const icon1 = createIcon('icon1', '70px', '10px', 'red');
    const icon2 = createIcon('icon2', '130px', '10px', 'green');
    const icon3 = createIcon('icon3', '190px', '10px', 'yellow');

    document.body.appendChild(icon1);
    document.body.appendChild(icon2);
    document.body.appendChild(icon3);

    // Import handleIconClick module and attach click event listener
      handleIconClick(icon1, 'icon1Clicked');
      handleIconClick(icon2, 'icon2Clicked');
      handleIconClick(icon3, 'icon3Clicked');
}
