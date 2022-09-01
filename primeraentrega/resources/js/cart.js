const { promises:fs } = require('fs');
const {getTimestamp, checkId, checkLength, newId} = require('../../src/functions')

class CartContainer{
    constructor(id){
         this.route = route
    }
    async newCart(products){
        let timestamp = getTimestamp();
        let ids = await this.getAll(1)
        let id = newId(ids)
        this.saveCart({id, timestamp, products})
    }
    async getAll(option){
        try {
            return JSON.parse(await fs.readFile(this.route, 'utf-8'))[option]
        } catch (error) {
            return []
        } 
    }
    async saveCart(cart){
        let carts = await this.getAll(0);
        carts.push(cart)
        try {
            await fs.writeFile(this.route, JSON.stringify(carts, null, 2))
        } catch (error) {
            console.log(error)
        }
    }
    async saveCarts(carts){
        try {
            await fs.writeFile(this.route, JSON.stringify(carts, null, 2))
        } catch (error) {
            console.log(error)
        }
    }
    async update(cart){
        let carts = await this.getAll(0)
        let index = carts.map(element => element.id).indexOf(cart.id)
        if(index >= 0){
            carts.splice(index, 1)
            carts.push(cart)
            await this.saveCarts(carts)
        }
    }
    async getById(id){
        let carts = await this.getAll(0)
        if(!checkLength(carts)){
            return null
        }
        let cart = carts.find(element => element.id = id)
        return cart ? cart : null
    }
    async addToCart(cartId, product){
        let cart = await this.getById(cartId)
        cart.push(product)
        await this.update(cart)
    }
    async deleteCart(id){
        let carts = await this.getAll(0)
        let cart = carts.find(element => element.id == id)
        try {
            if(cart === undefined){
                throw new Error('id no encontrado')
            }
        let newCart = carts.filter(element => element.id != cart.id)
        await fs.writeFile(this.route, JSON.stringify(newCart, null, 2))
        } catch (error) {
            console.error('Error de escritura.')
            console.error(error)
        }
    }
    async deleteProduct(cartId, productId){
        let cart = await this.getById(cartId)
        try {
            if(cart === null){
                throw new Error('Id de carrito no encontrado')
            }
            let newCart = cart.filter(element => element.id =! productId)
            await this.saveCart(newCart)
        } catch (error) {
            console.log('Error de escritura')
            console.log(error)
        }
    }
}