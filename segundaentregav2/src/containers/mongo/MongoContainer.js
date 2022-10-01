import config from '../../utilities/config.js';
import mongoose from 'mongoose'

try {
    await mongoose.connect(config.mongodb.connection, config.mongodb.options)
} catch (error) {
    throw new Error('Cannot connect to database')
}

class MongoContainer{
    constructor(collectionName, schema){
        this.collection = mongoose.model(collectionName, schema)
    }
    async getAll(){

    }
    async getById(id){

    }
    async deleteById(id){

    }
}
export default MongoContainer



