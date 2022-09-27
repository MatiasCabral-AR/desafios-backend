import express from 'express';

const app = express();

const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana'];
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei'];
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta'];

function getRandomElement(array) {
    return array[Math.floor(array.length * Math.random())];
}

function crearCombinacionesAlAlzar() {
    return {
        nombre: getRandomElement(nombres),
        apellido: getRandomElement(apellidos),
        color: getRandomElement(colores)
    }
}

app.get('/test', (req, res) => {
    res.json(Array.from({length : 10}, ()=> crearCombinacionesAlAlzar()));
});

app.listen(8080);
