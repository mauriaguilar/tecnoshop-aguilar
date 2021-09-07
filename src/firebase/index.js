import {
    addDoc, setDoc, getDoc, getDocs,
    doc, collection,
    query, where,
    runTransaction, writeBatch
} from "firebase/firestore";
import FirebaseUtils from "./utils";
import { db } from "./config"
export default class Firebase {

    static getCollection(...pathSegments) {
        return collection(db, ...pathSegments);
    }

    static getDoc(...pathSegments) {
        return doc(db, ...pathSegments);
    }

    static query(collName, options) {
        const ref = this.getCollection(collName);
        return getDocs(query(ref, where(options.field, options.condition, options.value)));
    }

    static getAll(path, options) {
        const pathSegments = path.split('/');
        const ref = this.getCollection(...pathSegments);
        if (FirebaseUtils.areOptionsValid(options))
            return getDocs(query(ref, where(options.field, options.condition, options.value)));
        return getDocs(ref);
    }

    static get(path) {
        const pathSegments = path.split('/');
        const ref = this.getDoc(...pathSegments);
        return getDoc(ref);
    }

    static set(path, obj) {
        const pathSegments = path.split('/');
        return setDoc(this.getDoc(...pathSegments), obj);
    }

    static add(path, obj) {
        console.log(obj);
        const pathSegments = path.split('/');
        const ref = this.getCollection(...pathSegments);
        return addDoc(ref, obj);
    }

    static transaction(asyncFunc) {
        return runTransaction(db, asyncFunc);
    }

    static batch() {
        return writeBatch(db);
    }

    static addItem(item) {
        const ref = this.getCollection("items2");
        return addDoc(ref, item);
    }

    static addItems(items) {
        console.log("Adding items...");
        if (Array.isArray(items)) {
            const ref = this.getCollection("items2");
            for (let i = 0; i < items.length; i++) {
                delete items[i]["id"];
                addDoc(ref, items[i]).then((data) => {
                    console.log("Item added:");
                    console.log(data);
                });
            }
        }
        else
            console.log("Wrong format.");
    }

    static resetItems(mock_items, db_items) {
        console.log("Resetting items...");
        console.log(mock_items);
        console.log(db_items);
        mock_items.forEach((mock_item) => {
            let db_item = db_items.find(elem => elem.title === mock_item.title);
            if (db_item === undefined) {
                console.log("Adding a new item...");
                this.addItem();
            }
            else {
                db_item.stock = mock_item.stock;
                this.set("items2/" + db_item.id, db_item);
            }
        });
    }
}
