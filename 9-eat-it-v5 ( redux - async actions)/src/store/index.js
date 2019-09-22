


import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk'

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    // other store enhancers if any
    applyMiddleware(thunk)
));

export default store;