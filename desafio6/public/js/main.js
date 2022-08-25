const socket = io.connect();

function render(data){
    const html = data.map(elem=> {
        return (`<div class='d-flex justify-content-center align-items-center'><h3 class="text-light px-2">Autor : ${elem.author}</h3><p class='text-light px-2 align-items-center'>Mensaje : ${elem.text}</p></div>`)
    }).join(' ');
    document.getElementById('messages').innerHTML = html;
};

function addMessage(e){
    const message = {
        author : document.getElementById('author').value,
        text : document.getElementById('text').value
    }
    socket.emit('new-message', message);
    return false;
}

socket.on('messages', data => {
    render(data);
});