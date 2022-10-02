import FirebaseContainer from "./FirebaseContainer.js";
import { checkProduct } from "../../utilities/utilities.js";

class FirebaseProducts extends FirebaseContainer{
    constructor(){
        super('products')
        this.collectionName ='products'
    }
    async saveProduct(product){
        if(product.id){
            delete product.id
        }
        if(checkProduct(product)){
            let doc = this.collection.doc()
            await doc.set(product)
            return product
        }
        
        throw new Error('Invalid Product')
    }
    async updateProduct(product, productId){
        let doc = this.collection.doc(`${productId}`)
        if(product){
            await doc.update(product)
            return
        }
        throw new Error(400)
    }
}
export default FirebaseProducts