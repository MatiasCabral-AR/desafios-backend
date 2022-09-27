import admin from "firebase-admin"
import { readFile } from 'fs/promises';

const serviceAccount = JSON.parse(
  await readFile(
    new URL('./db/techwearclubar-firebase-adminsdk-zw6e4-7156ad43c6.json', import.meta.url)
  )
);


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount), databaseURL: "techwearclubAR"
});
console.log("Database Created.")

async function CRUD(){
    const db = admin.firestore()
    const query = db.collection('products')

    //Read 
    try {
        const querySnapshot = await query.get();
        const response = querySnapshot.docs.map( doc => ({
            id : doc.id
        }))
        console.log(response)
    } catch (error) {
        console.log(error)
    }
    // read by id
}

CRUD()


