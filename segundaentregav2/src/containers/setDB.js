import FirebaseCarts from "./firebase/FirebaseCarts.js";
import FirebaseProducts from "./firebase/FirebaseProducts.js";
import MongoContainer from "./mongo/MongoContainer.js";

export default function setDB(){
    const option = process.env.DB
    switch (option) {
        case 'mongo':
            console.log('INSIDE CASE MONGO')
            return MongoContainer
        case 'firebase':
            return {products : new FirebaseProducts, carts : new FirebaseCarts} 
        default:
            return null
    }
}