import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import usersReducer from './reducers/users';

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const initStore = (initialState = {}) => {
    return createStore(
        combineReducers({
            users: usersReducer
        }),
        initialState,
        bindMiddleware([thunkMiddleware])
    )
}

export default initStore;