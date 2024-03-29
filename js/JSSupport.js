﻿async function DownloadJson(fileName, contentStreamReference) {
    const arrayBuffer = await contentStreamReference.arrayBuffer();
    const blob = new Blob([arrayBuffer]);
    const url = URL.createObjectURL(blob);
    const anchorElement = document.createElement('a');
    anchorElement.href = url;

    if (fileName) {
        anchorElement.download = fileName;
    }

    anchorElement.click();
    anchorElement.remove();
    URL.revokeObjectURL(url);
}

async function IsPhone() {
    if (window.matchMedia('(max-device-width: 960px)').matches)
        return true;
    else
        return false;
}

async function ScroolToTop() {
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}