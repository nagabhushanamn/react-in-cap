


export function loadReviews(itemId, size) {
    //..
    let reviews = [
        { author: 'who-1', stars: 3, body: 'sample review-1' },
        { author: 'who-2', stars: 5, body: 'sample review-2' }
    ]
    return { type: 'LOAD_REVIEWS_SUCCESS', itemId, reviews }
}



export function addNewReview(itemId, review) {
    //..
    return { type: 'ADD_NEW_REVIEW_SUCCESS', itemId, review }
}