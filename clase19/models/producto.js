import mongoose from 'mongoose';

const productsCollection = 'productos_ecommerce';
const ProductsSchema = new mongoose.Schema({
    id : {type : Number, required : true, unique : true},
    cant: {type : Number, required : true},
    category: {type : String, required : true},
    description: {type : Array, required : true},
    discount : {type : Number, required : true},
    name: {type : String, required : true},
    price: {type : String, required : true},
    stock : {type : Number, required : true},
    src1 : {type : String, required : true},
    src2 : {type : String, required : true},
    src3 : {type : String, required : true},
    src4 : {type : String, required : true}
});

export const Products = mongoose.model(productsCollection, ProductsSchema);