import FirebaseCarts from "./firebase/FirebaseCarts.js";
import FirebaseProducts from "./firebase/FirebaseProducts.js";
import MongoCarts from "./mongo/MongoCarts.js";
import MongoContainer from "./mongo/MongoContainer.js";
import MongoProducts from "./mongo/MongoProducts.js";

export default function setDB(){
    const option = process.env.DB
    switch (option) {
        case 'mongo':
            return {products : new MongoProducts, carts : new MongoCarts}
        case 'firebase':
            return {products : new FirebaseProducts, carts : new FirebaseCarts} 
        default:
            return false
    }
}