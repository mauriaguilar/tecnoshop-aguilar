import {
    addDoc, getDoc, getDocs,
    doc, collection,
    query, where
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

    static add(path, obj) {
        console.log(obj);
        const pathSegments = path.split('/');
        const ref = this.getCollection(...pathSegments);
        return addDoc(ref, obj);
    }

    static addItem(item) {
        const ref = this.getCollection("items2");
        return addDoc(ref, item);
    }
}
