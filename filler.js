chrome.runtime.onMessage.addListener(
    function (request) {
        if (request.msg === 'fill') {
            var boxes = document.getElementsByTagName('input');
            for (let i of boxes) {
                i.value = 'LOREM IPSUM'
            }
        }
    });
