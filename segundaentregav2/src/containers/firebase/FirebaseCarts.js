import FirebaseContainer from './FirebaseContainer.js';

class FirebaseCarts extends FirebaseContainer{
    constructor(){
        super('carts')
        this.collectionName = 'carts'
    }
    async saveCart(cart){
        let doc = this.collection.doc()
        let response = await doc.set({products : cart})
        return response
    }
    async updateCart(cart){
        let doc = this.collection.doc(`${cart.id}`)
        let response = await doc.update(cart)
        return response
    }
    async addToCart(cartId, product){
        let doc = this.collection.doc(`${cartId}`)
        let response = await doc.set(doc.data().products.push(product))
        return response
    }
    async deleteCartProduct(cart, product){
        let index = cart.products.map(element => element.id).indexOf(product.id)
        cart.products.splice(index, 1)
        let response = await this.updateCart(cart)
        return response
    }
}
export default FirebaseCarts
