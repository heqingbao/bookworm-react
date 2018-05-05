import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../types';
import api from '../api';

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

// export const login = credentials => dispatch =>
//     api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));

export function login(credentials) {

    return function tmp(dispatch) {
        return api.user.login(credentials).then(user => {
            localStorage.bookwormJWT = user.token;
            dispatch(userLoggedIn(user))
        });
    }

}

export function logout() {
    return function tmp(dispatch) {
        localStorage.removeItem('bookwormJWT');
        dispatch(userLoggedOut());
    }
}