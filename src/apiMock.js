// data simulation
const items_data = [
    {
        id: 'd64cb826-416d-4b86-a528-d4fec79555fb',
        title: 'Smartphone ASD-A1',
        description: 'Smartphone Charge 4 Portable Waterproof Wireless Bluetooth Original Brand New',
        price: 52.45,
        initial: 1,
        stock: 5,
        pictureUrl: 'http://lorempixel.com/400/200/technics/0/',
        category: "Smartphones"
    },
    {
        id: '7a4f7d1e-b3cc-4190-9be8-e75434b16df1',
        title: 'Smartphone DPM-P3',
        description: 'Smartphone Bluetooth Amplified Mini Speaker Portable Speaker Wireless WiFi',
        price: 34.5,
        initial: 1,
        stock: 5,
        pictureUrl: 'http://lorempixel.com/400/200/technics/1/',
        category: "Smartphones"
    },
    {
        id: '9093ad6d-8717-4527-994a-76e436ddd00f',
        title: 'Smartphone MKO-S1',
        description: 'Smartphone Bluetooth Amplified Mini Speaker Portable Speaker Wireless WiFi',
        price: 34.5,
        initial: 1,
        stock: 5,
        pictureUrl: 'https://lorempixel.com/400/200/technics/2/',
        category: "Smartphones"
    },


    {
        id: 'baead852-0a20-4a78-ace9-61f63d3f6672',
        title: 'Smartwatch ZXC-Z2',
        description: 'Smartwatch 2x Universal 1000W Car Speaker Audio 4Ω Super',
        price: 9.49,
        initial: 1,
        stock: 5,
        pictureUrl: 'http://lorempixel.com/400/200/technics/4/',
        category: "Smartwatches"
    },
    {
        id: '93ab86e7-c360-4add-a783-681aee96e632',
        title: 'Smartwatch RTE-X5',
        description: 'Smartwatch Bluetooth Amplified Mini Speaker Portable Speaker Wireless WiFi',
        price: 34.5,
        initial: 1,
        stock: 5,
        pictureUrl: 'http://lorempixel.com/400/200/technics/3/',
        category: "Smartwatches"
    },
    {
        id: '31ea9a8d-6bb2-4d9a-9309-2be228210988',
        title: 'Smartwatch KLJ-U3',
        description: 'Smartwatch Bluetooth Amplified Mini Speaker Portable Speaker Wireless WiFi',
        price: 34.5,
        initial: 1,
        stock: 5,
        pictureUrl: 'http://lorempixel.com/400/200/technics/9/',
        category: "Smartwatches"
    },


    {
        id: 'ebb76000-c738-476c-b3fd-34704b567c74',
        title: 'Accesory TUO-Y7',
        description: 'Accesory Bluetooth Amplified Mini Speaker Portable Speaker Wireless WiFi',
        price: 34.5,
        initial: 1,
        stock: 5,
        pictureUrl: 'http://lorempixel.com/400/200/technics/7/',
        category: "Accessories"
    },
    {
        id: 'c7aa5a89-64d9-4127-9345-cd9925a900ec',
        title: 'Accesory NOY-K8',
        description: 'Accesory Bluetooth Amplified Mini Speaker Portable Speaker Wireless WiFi',
        price: 34.5,
        initial: 1,
        stock: 5,
        pictureUrl: 'http://lorempixel.com/400/200/technics/8/',
        category: "Accessories"
    },
    {
        id: '41af10cc-7f1b-4af5-b462-7a3504d78b61',
        title: 'Accesory FRW-N5',
        description: 'Accesory Bluetooth Amplified Mini Speaker Portable Speaker Wireless WiFi',
        price: 34.5,
        initial: 1,
        stock: 5,
        pictureUrl: 'http://lorempixel.com/400/200/technics/10/',
        category: "Accessories"
    },


    {
        id: 'fb231439-9ae0-4d67-bd9b-e8bfa95cc35a',
        title: 'Speaker QWE-Q3',
        description: 'Speaker Bluetooth Amplified Mini Portable Speaker Wireless WiFi',
        price: 14.09,
        initial: 1,
        stock: 5,
        pictureUrl: 'http://lorempixel.com/400/200/technics/5/',
        category: "Speakers"
    },
    {
        id: '71c3217e-95fc-4ecd-92a9-72ef235b915c',
        title: 'Speaker VYW-E3',
        description: 'Speaker Bluetooth Amplified Mini Portable Speaker Wireless WiFi',
        price: 14.09,
        initial: 1,
        stock: 5,
        pictureUrl: 'http://lorempixel.com/400/200/nightlife/0/',
        category: "Speakers"
    },
    {
        id: '04a9d165-cdd9-4356-8b0d-25b2715412ed',
        title: 'Speaker BTR-I9',
        description: 'Speaker Bluetooth Amplified Mini Portable Speaker Wireless WiFi',
        price: 14.09,
        initial: 1,
        stock: 5,
        pictureUrl: 'http://lorempixel.com/400/200/nightlife/2/',
        category: "Speakers"
    },


    {
        id: '9cec2487-e544-40c6-b112-81d47edd7b10',
        title: 'Battery FER-T3',
        description: 'Battery Bluetooth Amplified Mini Speaker Portable Speaker Wireless WiFi',
        price: 12.9,
        initial: 1,
        stock: 5,
        pictureUrl: 'http://lorempixel.com/400/200/technics/6/',
        category: "Batteries"
    },
    {
        id: 'a52653e7-13cc-4310-a233-79fa0eaff1fd',
        title: 'Battery BFS-T3',
        description: 'Battery Bluetooth Amplified Mini Speaker Portable Speaker Wireless WiFi',
        price: 12.9,
        initial: 1,
        stock: 5,
        pictureUrl: 'http://lorempixel.com/400/200/nightlife/3/',
        category: "Batteries"
    },
    {
        id: 'c829180c-6ab1-4671-9a70-060d3ae809d4',
        title: 'Battery GWS-T3',
        description: 'Battery Bluetooth Amplified Mini Speaker Portable Speaker Wireless WiFi',
        price: 12.9,
        initial: 1,
        stock: 5,
        pictureUrl: 'http://lorempixel.com/400/200/nightlife/4/',
        category: "Batteries"
    }
];





// api call simulation
const getFromApi = (items_id = []) => {
    console.log('waiting for response...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let items_res = [];
            if (items_id.length === 1 && items_id[0] === "*") {
                items_res = items_data;
            }
            else {
                items_res = items_data.map((item_data, index, array) => {
                    if (items_id.find(item_id => item_id === item_data.id)){
                        console.log(item_data)
                        return item_data;
                    }
                    return null;
                }).filter(item => item !== null);
            }
            console.log(items_res);
            if (items_res != null) resolve(items_res);
            reject({
                status: 404
            });
        }, 2000);
    });
};

export const getItems = (items_id) => {
    return new Promise(async (resolve, reject) => {
        const items = await getFromApi(items_id).catch(
            err => reject(err)
        );
        (items) ? resolve(items) : reject('not items');
    });
}

export const getItemsByCategory = (category) => {
    return new Promise(async (resolve, reject) => {
        let items = await getFromApi(["*"]).catch(
            err => reject(err)
        );
        items = items.filter(item => item.category === category);
        console.log(items);
        (items) ? resolve(items) : reject('not items');
    });
}

export default getItems;