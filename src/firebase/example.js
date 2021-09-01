import { useEffect, useState } from "react";
// import { items_data } from "../apiMock";
import Firebase from "../../firebase"

// -----------------------------------------------------
// EXAMPLE CODE:
export const RequestExamples = () => {

    const [items, setItems] = useState({});

    useEffect(() => {
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
            // setItems(arr);
            console.log(arr);
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
            FIREBASE CARGADO:
            <h5>DB:</h5> <pre style={{"fontSize": "12px"}}>{JSON.stringify(items, null, 4)}</pre>
        </h1>
    )
}
