import FirebaseCarts from "./firebase/FirebaseCarts";
import FirebaseProducts from "./firebase/FirebaseProducts";
import MongoContainer from "./mongo/MongoContainer";

export default function setDB(){
    switch (process.env.DB) {
        case 'mongo':
            return {products : FirebaseProducts, carts : FirebaseCarts}
        case 'firebase':
            return MongoContainer
        default:
            return null
    }
}