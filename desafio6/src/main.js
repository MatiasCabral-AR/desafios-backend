const express = require('express');
const app = express()
const {Server:HttpServer} = require('http');
const {Server: Socket} = require('socket.io');
const httpServer = new HttpServer(app);
const io = new Socket(httpServer);
// app.use settings
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// Engine set
app.set('views', './public/views');
app.set('view engine', 'ejs');
// Products and messages
const Container = require('../api/productos')
const products = new Container('./resources/products.txt')
const messages = [
    { author : 'G', text: 'qwerty'},
    { author : 'Q', text: 'asdfgh'},
    { author : 'N', text: 'zxcvbn'}
];
// ---------------------------------
app.get('/', async (req, res) => {
    const productos = await products.getAll()
    res.render('inicio', {productos})
    io.on('connection', async socket => {
        console.log('Inside io.on')
        socket.emit('messages', messages)
        socket.on('new-message', data => {
            messages.push(data)
            io.sockets.emit('messages', messages)
        });
    });
})

// ---------------------------------

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Server in port : ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error in server : ${error}`))