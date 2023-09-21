var PageHistory = [window.location.origin + "/files.javascript/public/web/oak.main/index.html"]
var PageNum = 0;

// JavaScript code to set the source of the iframe
var browser_window = document.querySelector("#browser-window")
var iframe = browser_window.querySelector("iframe");

var home_button = browser_window.querySelector("#browser-home");

var browser_hyperlinks = browser_window.querySelectorAll("a");

home_button.addEventListener("click", () => {
    iframe.src = window.location.origin + "/files.javascript/public/web/oak.main/index.html";
});

// Specify the URL you want to load into the iframe

// Set the iframe's source to the specified URL
iframe.src = PageHistory[PageNum];

const observer = new MutationObserver((mutations)=>{
    mutations.forEach(function() {
        if (browser_window.style.display == 'none' && browser_window.dataset.minimalized == "0") {
            iframe.src = window.location.origin + "/files.javascript/public/web/oak.main/index.html";
        }
    });
});
observer.observe(browser_window, { attributes : true, attributeFilter : ['style'] });