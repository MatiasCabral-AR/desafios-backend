import admin from 'firebase-admin';
import config from '../../utilities/config.js';

admin.initializeApp({
    credential : admin.credential.cert(config.firebase)
});
const db = admin.firestore();

class FirebaseContainer{
    constructor(collectionName){
        this.collection = db.collection(collectionName)
    }
    async getAll(){

    }
    async getById(id){

    }
    async deleteById(id){
        
    }

}

export default FirebaseContainer