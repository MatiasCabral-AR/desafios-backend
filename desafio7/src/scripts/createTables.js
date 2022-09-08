import knex from 'knex'
import config from './config.js'
import { productsArray, messagesArray } from './importTables.js';
//------------------------------------------
// productos en MariaDb

try {
    const mariaDbClient = knex(config.mariaDb)
    mariaDbClient.schema.createTable('products', table => {
        table.increments('id')
        table.string('name')
        table.integer('price')
        table.string('src')
        console.log('Tabla vacia creada con exito')
    })
    mariaDbClient('products').insert(productsArray)
        .then(() => console.log('Elementos insertados en la tabla'))
        .catch((err) => {console.log(err); throw new Error(err)})
        .finally(() => { mariaDbClient.destroy(); console.log('Conexion Finalizada')})
    console.log('Tabla productos en mariaDb creada con éxito')
} catch (error) {
    console.log('Error al crear tabla productos en mariaDb')
    console.log(error)
}

//------------------------------------------
// mensajes en SQLite3
try {
    //const sqliteClient = knex(config.sqlite3)

    //Implementar creación de tabla

    console.log('tabla mensajes en sqlite3 creada con éxito')
} catch (error) {
    console.log('error al crear tabla mensajes en sqlite3')
}