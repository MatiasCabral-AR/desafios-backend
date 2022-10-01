import mongoose from 'mongoose';
import { productModelName, productSchema } from '../schemaConfig';
import MongoContainer from './MongoContainer';

class MongoProducts extends MongoContainer{
    constructor(){
        super(productModelName, productSchema)
    }
    async saveProduct(product){

    }
    async updateProduct(product){

    }

}
export default MongoProducts
