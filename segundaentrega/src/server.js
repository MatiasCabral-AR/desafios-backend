import express from 'express';
const { Router } = express;

// Server Instance
const app = express();



// Server settings
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'));

app.use('/api/productos', productosRouter)
app.use('/api/carritos', carritosRouter)

export default app;