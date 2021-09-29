import { initializeApp } from "firebase/app";
import {
    getFirestore
} from "firebase/firestore";

const { REACT_APP_FS_API_KEY } = process.env;
const { REACT_APP_FS_AUTH } = process.env;
const { REACT_APP_FS_PROJID } = process.env;
const { REACT_APP_FS_APPID } = process.env;

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: REACT_APP_FS_API_KEY,
    authDomain: REACT_APP_FS_AUTH,
    projectId: REACT_APP_FS_PROJID,
    storageBucket: "tecnoshop-aguilar.appspot.com",
    messagingSenderId: "515053350214",
    appId: REACT_APP_FS_APPID
};

initializeApp(firebaseConfig);

export const db = getFirestore();
