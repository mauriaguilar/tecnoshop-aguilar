import { initializeApp } from "firebase/app";
import {
    getFirestore,
    addDoc, getDocs,
    collection, query, where
} from "firebase/firestore";
import FirebaseUtils from "./utils";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "tecnoshop-aguilar.firebaseapp.com",
  projectId: "tecnoshop-aguilar",
  storageBucket: "tecnoshop-aguilar.appspot.com",
  messagingSenderId: "515053350214",
  appId: "1:515053350214:web:a5c80c5cbe47d305058947"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export default class Firebase {
    static query(collName, options) {
        const ref = collection(db, collName);
        return getDocs(query(ref, where(options.field, options.condition, options.value)));
    }

    static getItems(options) {
        const ref = collection(db, "items");
        if (FirebaseUtils.areOptionsValid(options))
            return getDocs(query(ref, where(options.field, options.condition, options.value)));
        return getDocs(query(ref));
    }

    static addItem(item) {
        const ref = collection(db, "items");
        return addDoc(ref, item);
    }

    static addItems(items) {
        console.log("Adding items.")
        if (Array.isArray(items)){
            for (let i=0; i<items.length; i++){
                this.addItem(items[i]).then((data) => {
                    console.log("Items added:");
                    console.log(data)
                });
            }
        }
        else
            console.log("Wrong format.");
    }
}
