var id;
var dlist = document.createElement("DATALIST");
dlist.setAttribute('id','dlist');
array = ['GRB','LAX','JFK','MSP'];
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    dlist.appendChild(option);
}


document.body.insertAdjacentHTML('afterend', '<div id="two"></div>');
document.getElementById('two').appendChild(dlist);
document.getElementById('input_destination_1').setAttribute('list','dlist');



chrome.runtime.onMessage.addListener(
    function (request) {
        document.getElementById(id || 'input_origin_1').value = request.from;
        document.getElementById('input_destination_1').value = request.to;
        
        
    });
document.onclick = (e) => {
    e = e || window.event;
    var target = e.target || e.srcElement;
    id = target.id;
};