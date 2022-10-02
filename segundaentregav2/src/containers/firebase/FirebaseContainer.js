import admin from 'firebase-admin';
import config from '../../utilities/config.js';
import {formatDoc, formatDocs} from '../../utilities/utilities.js'

admin.initializeApp({
    credential : admin.credential.cert(config.firebase)
});
const db = admin.firestore();
class FirebaseContainer{
    constructor(collectionName){
        this.collection = db.collection(collectionName)
    }
    async getAll(){
      let all = await this.collection.get()
      return formatDocs(all.docs, this.name)
    }
    async getById(id){
        let doc = this.collection.doc(`${id}`)
        let item = await doc.get()
        return formatDoc(item, this.collectionName)
    }
    async deleteById(id){
        let doc = this.collection.doc(`${id}`)
        let item = await doc.delete()
        return item
    }
}
export default FirebaseContainer