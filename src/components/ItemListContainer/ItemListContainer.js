import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList"

// data simulation
const items = [
    {
        id: 'd64cb826-416d-4b86-a528-d4fec79555fb',
        title: 'Speaker ASD-A1',
        description: 'Charge 4 Portable Waterproof Wireless Bluetooth Original Brand New',
        price: '$52.45',
        pictureUrl: 'http://lorempixel.com/400/200/technics/1/'
    },
    {
        id: 'baead852-0a20-4a78-ace9-61f63d3f6672',
        title: 'Speaker ZXC-Z2',
        description: '2x Universal 1000W Car Speaker Audio 4Ω Super Power Loud Dome Tweeter',
        price: '$9.49',
        pictureUrl: 'http://lorempixel.com/400/200/technics/3/'
    },
    {
        id: 'fb231439-9ae0-4d67-bd9b-e8bfa95cc35a',
        title: 'Speaker QWE-Q3',
        description: 'Cash Bluetooth Amplified Mini Speaker Portable Speaker Wireless WiFi',
        price: '$14.09',
        pictureUrl: 'http://lorempixel.com/400/200/technics/5/'
    },
];

// api call simulation
const getItem = (id = null) => {
    console.log('waiting for response...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const item = items.find(user => user.id === id);
            console.log(item);
            if (item != null) resolve(item);
            reject({
                status: 404
            });
        }, 2000);
    });
};

const getItems = (id) => {
    return new Promise(async (resolve, reject) => {
        const item = await getItem(id).catch(
            err => reject(err)
        );
        (item) ? resolve(item) : reject('not items');
    });
}

const ItemListContainer = ({ greeting }) => {
    const [itemList, setItemList] = useState([{
        id: 0, title: "loading...", description: "loading...",
        pictureUrl: "https://lorempixel.com/g/400/200/abstract/10/"
    }]);

    useEffect(() => {async function fetchData() {
        console.log("Searching items");

        const item1 = await getItems('d64cb826-416d-4b86-a528-d4fec79555fb');
        setItemList([item1]);
        const item2 = await getItems('baead852-0a20-4a78-ace9-61f63d3f6672');
        setItemList([item1, item2]);
        const item3 = await getItems('fb231439-9ae0-4d67-bd9b-e8bfa95cc35a');
        setItemList([item1, item2, item3]);

        console.log([item1, item2, item3]);
      }
      fetchData();
    },[])

    return (
        <div className="row m-5 border border-dark">
            
            <div id="itemListContainer" className="col fs-3 ">
                Hi <span className="greeting">{ greeting }</span>,
                these are our innovative products!
                <div className="card-group">
                    <ItemList items={itemList}/>
                </div>
            </div>

        </div>
    );
}

export default ItemListContainer;