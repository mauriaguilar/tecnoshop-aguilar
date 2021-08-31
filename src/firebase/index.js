import { useEffect, useState } from "react";
// import { items_data } from "../apiMock";
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


class Firebase {
    static getCollection(collName) {
        return collection(db, collName);
    }

    static query(collName, options) {
        const ref = this.getCollection(collName);
        return getDocs(query(ref, where(options.field, options.condition, options.value)));
    }

    static addItem(item) {
        const ref = this.getCollection("items");
        return addDoc(ref, item);
    }

    static addItems(items) {
        console.log("Adding items.")
        if (Array.isArray(items)){
            for (let i=0; i<items.length; i++){
                console.log(items[i])
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



export const RequestItems = () => {

    const [items, setItems] = useState({});

    useEffect(() => {
        console.log("HOOK EJECUTADO: ");

        // GET: Getting Catalog
        Firebase.query("items", {
            field: "title",
            condition: "!=",
            value: ""
        }).then((docs) => {
            const arr = [];
            docs.forEach((item) => {
                arr.push(item.data());
            });
            setItems(arr);
        })

        // POST: Add 1 item
        // Firebase.addItem(item).then((data) => {
        //     console.log(data)
        // })
        // POST: Create Catalog
        // Firebase.addItems(items_data);

    }, [])

    return (
        <h1>
            FIREBASE CARGADO
            <h5>DB:</h5> <pre style={{"fontSize": "12px"}}>{JSON.stringify(items, null, 4)}</pre>
        </h1>
    )
}

console.log("FIREBASE EJECUTADO");