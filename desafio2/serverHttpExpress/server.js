const express = require('express')
const app = express()



const server = app.listen(8080 , ()=> {
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`)
})

let visitas = 0

app.get('/', (req, res) => {
    res.send('<h1 style="color:blue;">Hola mundo</h1>')
})
app.get('/visitas', (req, res) => {
    visitas += 1
    res.send(`La cantidad de visitas es : ${visitas}`)
})
app.get('/fyh', (req, res) => {
    const date = new Date
    res.send(date.toLocaleString())
})
app.get('*', (req, res) => {
    res.send('<h1>Pusiste cualquier cosa idiota</h1>')
})

server.on('error', error => {
    console.error(`Error en el servidor. ${error}`)
})