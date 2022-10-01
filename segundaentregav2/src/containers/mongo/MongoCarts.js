import mongoose from 'mongoose';
import { cartModelName, cartSchema } from '../schemaConfig';
import MongoContainer from './MongoContainer';

class MongoCarts extends MongoContainer{
    constructor(){
        super(cartModelName, cartSchema)
    }
    async saveCart(cart){

    }
    async updateCart(cart){

    }
    async addToCart(cartId, product){

    }
    async deleteCartProduct(cartId, productId){

    }
}
export default MongoCarts