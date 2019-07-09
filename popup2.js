fillBut.onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            from: fromText.value,
            to: toText.value
        });
    });
}