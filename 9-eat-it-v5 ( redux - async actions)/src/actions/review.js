
import ItemApi from '../api/Item'

export function loadReviews(itemId, size) {
    //..
    // let reviews = [
    //     { author: 'who-1', stars: 3, body: 'sample review-1' },
    //     { author: 'who-2', stars: 5, body: 'sample review-2' }
    // ]
    // return { type: 'LOAD_REVIEWS_SUCCESS', itemId, reviews }

    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'loading reviews' }) // async - action
        ItemApi.get(`${itemId}/reviews`)
            .then(response => response.data)
            .then(reviews => {
                dispatch({ type: 'REQUEST_END', message: '' }) // async - action
                dispatch({ type: 'LOAD_REVIEWS_SUCCESS', itemId, reviews }) // async - action
            })
            .catch(error => dispatch({ type: 'REQUEST_ERROR', message: error.message })) // async - action);
    }

}



export function addNewReview(itemId, review) {
    //..
    // return { type: 'ADD_NEW_REVIEW_SUCCESS', itemId, review }

    return function (dispatch) {
        ItemApi.post(`${itemId}/reviews`, review)
            .then(response => response.data)
            .then(review => {
                dispatch({ type: 'ADD_NEW_REVIEW_SUCCESS', itemId, review }) // async - action
            });
    }
}