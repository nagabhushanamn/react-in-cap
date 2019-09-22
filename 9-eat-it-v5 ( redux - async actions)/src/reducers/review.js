




export function reviewsReducer(state = {}, action) {
    let { type } = action;
    switch (type) {
        case 'LOAD_REVIEWS_SUCCESS': {
            let { itemId, reviews } = action;
            let existingReviews = state[itemId] || []
            return { ...state, [itemId]: [...existingReviews, ...reviews] }
        }
        case 'ADD_NEW_REVIEW_SUCCESS': {
            let { itemId, review } = action;
            let existingReviews = state[itemId] || []
            return { ...state, [itemId]: [review, ...existingReviews] }
        }
        default: return state;
    }

}