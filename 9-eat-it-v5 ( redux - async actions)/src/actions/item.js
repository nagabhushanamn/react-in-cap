
import ItemApi from '../api/Item'


export function loadItems(cat, size) {
    //...
    // let items = [
    //     {}, {}
    // ]
    // return { type: 'LOAD_ITEMS_SUCCESS', items } // sync - action
 
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'loading items' }) // async - action
        ItemApi.get()
            .then(response => response.data)
            .then(items => {
                dispatch({ type: 'REQUEST_END', message: '' }) // async - action
                dispatch({ type: 'LOAD_ITEMS_SUCCESS', items }) // async - action
            })
            .catch(error => dispatch({ type: 'REQUEST_ERROR', message: error.message })) // async - action);
    }

}
