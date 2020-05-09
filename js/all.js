var list = document.querySelector('.list');
var send = document.querySelector('.send');
var data = JSON.parse(localStorage.getItem('listData')) || [];

send.addEventListener('click',addData,false);
list.addEventListener('click',deleteData,false);
updateList(data);

function addData(e){
    e.preventDefault();
    var txt = document.querySelector('.text').value;
    var todo ={
        content : txt 
    };
    data.push(todo);
    updateList(data);
    localStorage.setItem('listData',JSON.stringify(data));
}

function updateList(items){
    str="";
    var len = items.length;
    for( var i=0;i<len;i++){
        str += '<li><a href="#" data-index=' + i + '>刪除</a></li><span>' + items
        [i].content +' </span>'
    }
    list.innerHTML = str;
}

function deleteData(e){
    e.preventDefault();
    if(e.target.nodeName!=='A'){return};
    var index = e.target.dataset.index;
    data.splice(index,1);
    localStorage.setItem('listData',JSON.stringify(data));
    updateList(data);
}