import { FETCH_USERS, FETCH_USERS_MORE } from "../actions/usersActions";


const initialState = {
    users: [],
    loading: false,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return Object.assign({}, state, {
                users: [...state.users,...action.users]
            });
        case FETCH_USERS_MORE:
            return Object.assign({}, state, {
                users: [...state.users, ...action.users]
            });
        default:
            return state
    }

}