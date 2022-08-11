const express = require('express');
const app = express();

// Definimos como procesar la informacion
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Ejemplo GET
app.get('/api/mensajes', (req, res) => {
    console.log('HTTP GET')
    res.json({msg : 'Hola Mundo !'}) // Obtenemos los mensajes
})
// Ejemplo GET con query-params opcionales ej : pagina/productos?categoria:buzo
app.get('/api/mensajes-queryparams', (req, res) => {
    console.log('GET con query-params')
    if(Object.entries(req.query).length > 0){
        res.json({ 
            result : 'GET con query-params OK',
            query : req.query
        })
    }
    else{
        res.json({
            result : 'GET todos OK'
        })
    }
})
// Ejemplo GET con path-params
app.get('/api/mensajes/:id', (req, res) => {
    res.json({
        result : 'Recurso Buscado',
        pathParam : req.params.id
    })
})
// Ejemplo POST
app.post('/api/mensajes', (req, res) => {
    console.log(req.body)
})
// EJERCITACION ----------------------------------------------------------



app.listen(8080)