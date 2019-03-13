import * as firebase from 'firebase';
import 'firebase/firestore';

export const GET_ALL_TEMPLATES = 'GET_ALL_TEMPLATES';
export const GET_ALL_REMOTE_TEMPLATES = 'GET_ALL_REMOTE_TEMPLATES';

export function getAllTemplates() {
    return {
        type: GET_ALL_TEMPLATES,
        payload: []
    }
}

export function getAllRemoteTemplates() {
    return (dispatch) => {
        var db = firebase.firestore();
        return db.collection("templates").get().then(function (querySnapshot) {
            let data = [];
            querySnapshot.forEach(function (doc) {
                data.push(doc.data());
            });
            dispatch({
                type: GET_ALL_REMOTE_TEMPLATES,
                payload: data
            });
        });
    };
}