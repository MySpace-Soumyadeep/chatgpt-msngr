import admin from "firebase-admin"
import { getApps } from "firebase-admin/app"

const serviceAccKey = JSON.parse(process.env.FIREBASE_SERVICE_ACC_KEY as string);

if(!getApps().length){
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccKey)
    });
}

const adminDB = admin.firestore();

export {adminDB}