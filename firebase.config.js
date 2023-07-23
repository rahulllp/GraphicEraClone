import{getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAwE_lRCyv2P3HqlBz02PVU7vwAXwH71Bs",
  authDomain: "universitydata-e003e.firebaseapp.com",
  databaseURL: "https://universitydata-e003e-default-rtdb.firebaseio.com",
  projectId: "universitydata-e003e",
  storageBucket: "universitydata-e003e.appspot.com",
  messagingSenderId: "440779439541",
  appId: "1:440779439541:web:062827a9f6a1cba6bdadfc"
  };

  const app =getApps.length >0 ?getApp(): initializeApp(firebaseConfig)
  const firestore= getFirestore(app)
  const storage = getStorage(app)
  export const auth = getAuth(app);
  export{app,firestore,storage}