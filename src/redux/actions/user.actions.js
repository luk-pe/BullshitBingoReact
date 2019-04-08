import * as firebase from 'firebase';
import 'firebase/auth';

export const SET_USER = 'SET_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function loginUser(mail, password) {
    return (dispatch) => {
        const auth = firebase.auth();
        return auth.signInWithEmailAndPassword(mail, password).then((user) => {
            dispatch({
                type: SET_USER,
                payload: user
            });
        });
    };
}

export function logoutUser() {
    return (dispatch) => {
        const auth = firebase.auth();
        return auth.signOut().then(function () {
            dispatch({
                type: LOGOUT_USER,
            });
        });
    };
}

export function updateUsername(name) {
    return (dispatch) => {
        const user = firebase.auth().currentUser;
        return user.updateProfile({
            displayName: name
        }).then(function () {
            dispatch({
                type: SET_USER,
                payload: user
            });
        });
    };
}

export function checkUserStatus() {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged(function (user) {
                resolve();
                if (user) {
                    console.log("USER LOGGED IN....");
                    console.log(user);
                    dispatch({
                        type: SET_USER,
                        payload: user
                    });
                } else {
                    dispatch({
                        type: LOGOUT_USER
                    });
                }
            });
        });
    };
}