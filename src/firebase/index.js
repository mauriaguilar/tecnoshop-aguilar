import { initializeApp } from "firebase/app";
import {
    getFirestore,
    addDoc, getDocs,
    collection, query, where
} from "firebase/firestore";

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
    static getCollection(collName) {
        return collection(db, collName);
    }

    static query(collName, options) {
        const ref = this.getCollection(collName);
        return getDocs(query(ref, where(options.field, options.condition, options.value)));
    }

    static areOptionsValid(options) {
        console.log("options: " );
        console.log(options);
        if (typeof(options) == "object") {
            if (!options.field || typeof(options.field) !== "string") {
                console.log("options: condition is not valid.");
                return false;
            }
            else if (!options.condition || typeof(options.condition) !== "string") {
                console.log("options: condition is not valid.");
                return false;
            }
            else if (!options.value) {
                console.log("options: value is not valid.");
                return false;
            }
            else {
                console.log("options: are valid.");
                return true;
            }
        } else {
            console.log("options: not valid.");
            return false;
        }
    }

    static getItems(options) {
        const ref = this.getCollection("items");
        if (this.areOptionsValid(options))
            return getDocs(query(ref, where(options.field, options.condition, options.value)));
        console.log("not valid");
        return getDocs(query(ref));
    }

    static addItem(item) {
        const ref = this.getCollection("items");
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
