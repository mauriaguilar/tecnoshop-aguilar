// data simulation
const items_data = [
    {
        id: 'd64cb826-416d-4b86-a528-d4fec79555fb',
        title: 'Smartphone ASD-A1',
        description: 'Charge 4 Portable Waterproof Wireless Bluetooth Original Brand New',
        price: 52.45,
        pictureUrl: 'http://lorempixel.com/400/200/technics/1/'
    },
    {
        id: 'baead852-0a20-4a78-ace9-61f63d3f6672',
        title: 'Smartwatch ZXC-Z2',
        description: '2x Universal 1000W Car Speaker Audio 4Ω Super Power Loud Dome Tweeter',
        price: 9.49,
        pictureUrl: 'http://lorempixel.com/400/200/technics/3/'
    },
    {
        id: 'fb231439-9ae0-4d67-bd9b-e8bfa95cc35a',
        title: 'Speaker QWE-Q3',
        description: 'Speaker Bluetooth Amplified Mini Portable Speaker Wireless WiFi',
        price: 14.09,
        pictureUrl: 'http://lorempixel.com/400/200/technics/5/'
    },
    {
        id: '9cec2487-e544-40c6-b112-81d47edd7b10',
        title: 'Battery FER-T3',
        description: 'Battery Bluetooth Amplified Mini Speaker Portable Speaker Wireless WiFi',
        price: 12.9,
        pictureUrl: 'http://lorempixel.com/400/200/technics/6/'
    },
    {
        id: 'ebb76000-c738-476c-b3fd-34704b567c74',
        title: 'Accesorie KLJ-U3',
        description: 'Accesorie Bluetooth Amplified Mini Speaker Portable Speaker Wireless WiFi',
        price: 34.5,
        pictureUrl: 'http://lorempixel.com/400/200/technics/7/'
    },
];

// api call simulation
const getFromApi = (items_id = []) => {
    console.log('waiting for response...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const items_res = items_data.map((item_data, index, array) => {
                if (items_id.find(item_id => item_id === item_data.id)){
                    console.log(item_data)
                    return item_data;
                }
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
        const items = await getFromApi(items_id).catch(
            err => reject(err)
        );
        (items) ? resolve(items) : reject('not items');
    });
}


export default getItems;