export const FETCH_USERS = 'fetch_users';
export const FETCH_USERS_MORE = 'fetch_users_more';



export const fetchUsers = () => dispatch => {
    return dispatch({
        type: FETCH_USERS, users: [
            { name: 'Mohammad AlOulabi' },
            { name: 'Ahmad Ali' }
        ]
    })
}
export const fetchUsersMore = () => dispatch => {
    return dispatch({
        type: FETCH_USERS_MORE, users: [
            { name: 'Mohammad AlOulabi' },
            { name: 'Ahmad Ali' }
        ]
    })
}