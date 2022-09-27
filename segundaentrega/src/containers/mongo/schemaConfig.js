import mongoose from 'mongoose';

const productModelName = 'product';

const productSchema = new mongoose.Schema({
    cant : {type : String, required : true},
    category : {type : String, required : true},
    description : {type : Array, required : true},
    discount : {type : Number, required : true},
    name : {type : String, required : true},
    price : {type : Number, required : true},
    src1 : {type : String, required : true},
    src2 : {type : String, required : true},
    src3 : {type : String, required : true},
    src4 : {type : String, required : true},
    stock : {type : Number, required : true}
})

const cartModelName = 'cart'

const cartSchema = new mongoose.Schema({
    products : [{type : mongoose.Schema.Types.ObjectId, ref : 'product'}],
    timestamp : {type : String, required : true}
})

export {productModelName, productSchema, cartModelName, cartSchema}