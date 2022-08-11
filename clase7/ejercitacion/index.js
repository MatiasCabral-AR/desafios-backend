const express = require('express')
const app = express()

// Definimos como procesar la informacion
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const palabras = ['Frase', 'Inicial']

app.get('/api/frase', (req, res) => {
    res.send({frase : palabras.join(' ')})
})



app.listen(8080);