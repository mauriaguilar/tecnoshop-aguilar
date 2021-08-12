import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList"

// data simulation
const items_data = [
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
const getItem = (items_id = []) => {
    console.log('waiting for response...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const items_res = items_data.map((item_data, index, array) => {
                if (items_id.find(item_id => item_id === item_data.id))
                    return item_data;
                    console.log(item_data)
                return null;
            }).filter(item => item !== null);;
            console.log(items_res);
            if (items_res != null) resolve(items_res);
            reject({
                status: 404
            });
        }, 2000);
    });
};

const getItems = (items_id) => {
    return new Promise(async (resolve, reject) => {
        const items = await getItem(items_id).catch(
            err => reject(err)
        );
        (items) ? resolve(items) : reject('not items');
    });
}

const ItemListContainer = ({ greeting }) => {
    const [itemList, setItemList] = useState([{
        id: 0, title: "loading...", description: "loading...",
        pictureUrl: "https://lorempixel.com/g/400/200/abstract/10/"
    }]);

    useEffect(() => {async function fetchData() {
        console.log("Searching items");
        const items_id = [
                    'd64cb826-416d-4b86-a528-d4fec79555fb',
                    'baead852-0a20-4a78-ace9-61f63d3f6672',
                    'fb231439-9ae0-4d67-bd9b-e8bfa95cc35a'
        ]
        const items = await getItems(items_id);
        setItemList(items);

        console.log(items);
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