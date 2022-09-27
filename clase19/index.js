import mongoose from 'mongoose';
import { Products } from './models/producto.js';
import { promises as fs } from 'fs';

async function CRUD(){
    try {
        // Conection to database
        const URL = 'mongodb://localhost:27017/ecommerce'
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology : true
        });
        console.log('Connected to database')
        const productos = JSON.parse(await fs.readFile('./json/dbProductos.json', 'utf-8'))
        productos.forEach(async product => {
            await Products.create(product)
        })
        console.log('Productos ingresados')
    } catch (error) {
        console.log('Error on connection')
        console.log(error.message)
    }
}

CRUD()