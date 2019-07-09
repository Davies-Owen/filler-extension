fillText.onclick = () => {
    window.location.href = "popup2.html";
    chrome.browserAction.setPopup({popup: "popup2.html"});

}