


export function loadItems(cat, size) {
    //...
    let items = [
        {
            id: 1,
            name: 'veg',
            price: 100.00,
            canBuy: true,
            description: 'veg is yummy ..'
        },
        {
            id: 2,
            name: 'non-veg',
            price: 200.00,
            canBuy: true,
            description: 'non-veg is yummy ..'
        }
    ]
    return { type: 'LOAD_ITEMS_SUCCESS', items } // action
}
