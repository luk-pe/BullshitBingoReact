import * as firebase from 'firebase';
import 'firebase/auth';
import {GET_ALL_REMOTE_TEMPLATES} from "./templates.actions";

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function loginUser(mail,password) {
    return (dispatch) => {
        const auth = firebase.auth();
        return auth.signInWithEmailAndPassword(mail, password).then((user) => {
            console.log(user);
            dispatch({
                type: LOGIN_USER,
                payload: user
            });
        });
    };
}