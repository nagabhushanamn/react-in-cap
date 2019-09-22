



export function itemsReducer(state = [], action) {
    let { type } = action;
    switch (type) {
        case 'LOAD_ITEMS_SUCCESS': {
            let { items } = action;
            return [...items]
        }
        default: return state;
    }

}