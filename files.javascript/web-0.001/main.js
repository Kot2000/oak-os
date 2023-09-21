const windows = document.querySelectorAll('.window');
const taskbarIcons = document.getElementById('taskbar-icons');
const settingsButton = document.getElementById('settings');
const settingsWindow = document.getElementById('settings-window');
const closeSettingsButton = document.getElementById('close-settings');

windows.forEach((window) => {
      let isDragging = false;
      let isResizing = false;
      let resizeHandle;
      let offset = { x: 0, y: 0 };
      let isMaximized = false;

      const titleBar = window.querySelector('.window-title');
      const minimizeButton = titleBar.querySelector('#minimize');
      const maximizeButton = titleBar.querySelector('#maximize');
      const closeButton = titleBar.querySelector('#close');

      // Create a taskbar icon for the window
      const taskbarIcon = document.createElement('div');
      taskbarIcon.classList.add('taskbar-icon');
      taskbarIcon.id = window.id+'-taskbar-icon';
      taskbarIcon.innerText = (() => {
        var textContentArray = [];

        // Iterate through all child nodes of "div1"
        titleBar.childNodes.forEach(function(node) {
          // Check if the node is a text node and not empty
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
            // Add the text content to the array
            textContentArray.push(node.textContent.trim());
          }
        });

        // Join the text content from the array, if needed
        return textContentArray.join(" ");

      })();
      taskbarIcons.appendChild(taskbarIcon);

      minimizeButton.addEventListener('click', () => {
        window.style.display = 'none';
        window.dataset.minimalized = "1";
        taskbarIcon.style.display = 'block';
      });

      maximizeButton.addEventListener('click', () => {
        if (!isMaximized) {
          window.style.width = '100%';
          window.style.height = '100%';
          window.style.top = '0';
          window.style.left = '0';
        } else {
          window.style.width = '300px';
          window.style.height = '200px';
          // Center the window on the screen
          window.style.top = 'calc(50% - 100px)';
          window.style.left = 'calc(50% - 150px)';
        }
        isMaximized = !isMaximized;
      });

      closeButton.addEventListener('click', () => {
        window.style.display = 'none';
        taskbarIcon.style.display = 'none';
      });

      // Add event listeners for resizing
      const resizeHandles = window.querySelectorAll('.resize-handle');

      resizeHandles.forEach((handle) => {
        handle.addEventListener('mousedown', (e) => {
          isResizing = true;
          resizeHandle = handle;
          offset.x = e.clientX;
          offset.y = e.clientY;
        });
      });

      document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;

        const dx = e.clientX - offset.x;
        const dy = e.clientY - offset.y;

        const edge = resizeHandle.getAttribute('data-edge');

        offset.x = e.clientX;
        offset.y = e.clientY;
      });

      document.addEventListener('mouseup', () => {
        isResizing = false;
      });

      titleBar.addEventListener('mousedown', (e) => {
        isDragging = true;
        offset.x = e.clientX - window.offsetLeft;
        offset.y = e.clientY - window.offsetTop;
        window.style.zIndex = 2;
      });

      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const x = e.clientX - offset.x;
        const y = e.clientY - offset.y;

        window.style.left = x + 'px';
        window.style.top = y + 'px';

        // If the window is dragged while maximized, unmaximize it
        if (isMaximized) {
          isMaximized = false;
          window.style.width = '300px';
          window.style.height = '200px';
          // Center the window on the screen
          window.style.top = 'calc(50% - 100px)';
          window.style.left = 'calc(50% - 150px)';
        }
      });

      document.addEventListener('mouseup', () => {
        isDragging = false;
        window.style.zIndex = 1;
      });

      // Clicking on the taskbar icon restores the window
      taskbarIcon.addEventListener('click', () => {
        window.style.display = 'block';
        window.dataset.minimalized = "0";
        taskbarIcon.style.display = 'block';
      });
});