// Imports

import express from 'express';
import { Server as HttpServer } from 'http';
import { Server as IOServer } from 'socket.io';
import config from './scripts/config.js';
import handlebars from 'express-handlebars'
import ContenedorSQL from '../resources/js/ContainerSQL';

// Instances

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
const hbs = handlebars.create({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/public/views/layout",//Ruta a plantilla principal
    partialsDir: __dirname + "/public/views/partials/" //Ruta a plantillas parciales
  })

const productos = new ContenedorSQL(config.mariaDb, 'productos')
const mensajes = new ContenedorSQL(config.sqlite3, 'mensajes')

// Get, Post and Socket 

app.get('/', (req, res) => {
    res.render('index', {})
})
io.on('connection', async socket => {
    socket.emit('update_products', await productos.getAll());
    socket.emit('update_messages', await mensajes.getAll());
    socket.on('new_product', async product => {
        await productos.saveProduct(product)
        io.emit('update_products', await productos.getAll())
    })
    socket.on('new_message', async message => {
        await mensajes.save(message)
        io.emit('update_messages', await mensajes.getAll())
    })
})

// APP use and set

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');//Registra el motor de plantillas
app.set('views', './public/views');//Especifica el directorio de vistas

// Port settings
const PORT = 8080;
const connectedServer = httpServer.listen(PORT, () => {
    console.log('Server running')
});
connectedServer.on(
    'error', error => console.log(`Error en el servidor : ${error}`)
)
