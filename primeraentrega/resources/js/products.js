const { promises: fs } = require('fs')
const {checkId, checkLength, newId, getTimestamp} = require('../../src/functions')

class Container{
    constructor(route){
        this.route = route
    }
    async save(object){
        const productos = await this.getAll()
        const index = productos.map(element => element.id).indexOf(object.id) // Obtenemos el indice del producto a reemplazar
        if(index >= 0){
            // Si el indexOf encuentra al producto :
            const oldProduct = productos[index]
            object.id = productos[index].id // Asignamos al nuevo producto el mismo ID que el anterior (ya que reemplazamos)
            productos[index] = object
            try {
                await fs.writeFile(this.route, JSON.stringify(productos, null, 2))
                console.log('Guardado exitoso')
                return [object, oldProduct]
            } catch (error) {
                console.error('Error de escritura')
                console.error(error)
                return []
            }
        }
        else{
            // Si el indexOf no encontro al producto : 
            console.log('Not found')
            return []
        }
    }
    async saveProduct(object){
        const products = await this.getAll()
        object.id = parseInt(object.id) 
        object.id = checkId(object, products)
        object.price = parseInt(object.price)
        object.timestamp = getTimestamp()
        try {
            console.log(`El siguiente elemento sera guardado : \n${JSON.stringify(object)}`)
            products.push(object)
            await fs.writeFile(this.route, JSON.stringify(products, null, 2))
            console.log('Guardado exitoso')
            return object
        } catch (error) {
            console.error('Error de escritura')
            console.error(error)
        }
    }
    async getById(id){
        const products = await this.getAll()
        if(!checkLength(products)){
            return
        }
        let product = products.find(element => element.id == id)
        return product ? product : null
    }
    async getAll(){
        try {
            let products = await fs.readFile(this.route, 'utf-8')
            return JSON.parse(products)
        } catch (error) {
            console.error('Error de lectura.')
            console.error(error)
            return []
        }
    }
    async deleteById(id){
        const products = await this.getAll()
        if(!checkLength(products)){
            return
        }
        const product = products.find(element => element.id == id)
        try {
            if(product === undefined){
                throw new Error('id no encontrado')
            }
            const newProducts = products.filter(element => element != product)
            console.log(`El siguiente elemento sera eliminado : \n${JSON.stringify(product)}`)
            await fs.writeFile(this.route, JSON.stringify(newProducts, null, 2))
            console.log(`Cambios guardados`)
            return product
        } catch (error) {
            console.error('Error de escritura.')
            console.error(error)
        }
    }
    
}
module.exports = Container;