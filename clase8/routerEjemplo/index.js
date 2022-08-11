const express = require('express');
const app = express();
const {Router} = express;

app.use(express.static('public'));

// ---------------------------------------------------
const routerMascotas = new Router();
routerMascotas.use(express.json());
routerMascotas.use(express.urlencoded({extended: true}))
const routerPersonas = new Router();
routerPersonas.use(express.json());
routerPersonas.use(express.urlencoded({extended: true}))
// --------------------------------------------------
const mascotas = [
    {'nombre' : 'dsa',
    'raza' : 'perro',
    'edad' : '2'
    }
]
routerMascotas.get('/', (req, res)=>{
    res.json(mascotas)
});
routerMascotas.post('/', (req, res)=>{
    mascotas.push(req.body)
    res.json(mascotas)
})
app.use('/mascotas', routerMascotas)
// ---------------------------------------------------
const personas = [
    {'nombre' : 'asd',
    'apellido' : 'dsa',
    'edad' : '44'
    }
]
routerPersonas.get('/', (req, res)=>{
    res.json(personas)
});

routerPersonas.post('/', (req, res)=>{
    personas.push(req.body)
    res.json(personas)
})
app.use('/personas', routerPersonas)
// ---------------------------------------------------
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))



