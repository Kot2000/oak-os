const desktopIcons = document.querySelectorAll(".desktop-icon");

desktopIcons.forEach((desktopIcon) => {
    desktopIcon.addEventListener("dblclick", () => {
        let window = document.querySelector(desktopIcon.dataset.open);

        window.style.display = 'block';
        window.dataset.minimalized = "0";
        document.querySelector("#"+window.id+'-taskbar-icon').style.display = 'block';
    });
});