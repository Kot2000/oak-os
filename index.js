const versions = {
    "main-path": "./files.javascript/",
    "versions": [
        {
            "path": "web-0.001/web.html",
            "id": "web-0.001",
            "downloadable": false,
            "web-view": true
        }
    ]
};

window.onhashchange = () => {
    const main_content = document.querySelector("#main-content");

    const content_containers = {
        "err404": main_content.querySelector("#err404"),
        "home": main_content.querySelector("#home"),
        "downloads": main_content.querySelector("#downloads")
    };

    const location = window.location;

    if ("" == location.hash || "#" == location.hash) {
        content_containers.home.style.scale = "1";
        content_containers.err404.style.scale = "0";
        content_containers.downloads.style.scale = "0";
    }
    else if ("#downloads" == location.hash) {
        content_containers.home.style.scale = "0";
        content_containers.err404.style.scale = "0";
        content_containers.downloads.style.scale = "1";
    }
    else {
        content_containers.home.style.scale = "0";
        content_containers.err404.style.scale = "1";
        content_containers.downloads.style.scale = "0";
    }
};

window.onload = () => {
    const main_content = document.querySelector("#main-content");

    const content_containers = {
        "err404": main_content.querySelector("#err404"),
        "home": main_content.querySelector("#home"),
        "downloads": main_content.querySelector("#downloads")
    };

    const location = window.location;

    if ("" == location.hash || "#" == location.hash) {
        content_containers.home.style.scale = "1";
        content_containers.err404.style.scale = "0";
        content_containers.downloads.style.scale = "0";
    }
    else if ("#downloads" == location.hash) {
        content_containers.home.style.scale = "0";
        content_containers.err404.style.scale = "0";
        content_containers.downloads.style.scale = "1";
    }
    else {
        content_containers.home.style.scale = "0";
        content_containers.err404.style.scale = "1";
        content_containers.downloads.style.scale = "0";
    }
};

for (var iv = 0; iv < versions.versions.length; iv++) {
    let v = versions.versions[iv];

    console.log(v.id);
}