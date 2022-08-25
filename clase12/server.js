// Server requires
const express = require('express');
const {Server:HttpServer} = require('http');
const {Server:IOServer} = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

// Using static files in /public
app.use(express.static('./public'));

const messages = [
    { author : 'G', text: 'qwerty'},
    { author : 'Q', text: 'asdfgh'},
    { author : 'N', text: 'zxcvbn'}
];

io.on('connection', socket => {
    console.log('Nuevo cliente conectado');
    socket.emit('messages', messages);
    socket.on('new-message', data => {
        messages.push(data)
        io.sockets.emit('messages', messages)
    });
})



httpServer.listen(8080, ()=> console.log('Server Running'));
