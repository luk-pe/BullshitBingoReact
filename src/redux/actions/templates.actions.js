import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

export const GET_ALL_REMOTE_TEMPLATES = 'GET_ALL_REMOTE_TEMPLATES';
export const UPLOAD_TEMPLATE = 'UPLOAD_TEMPLATE';
export const ADD_NEW_TEMPLATE = 'ADD_NEW_TEMPLATE';
export const EDIT_TEMPLATE = 'EDIT_TEMPLATE';

export function addNewTemplate(template) {

    return {
        type: ADD_NEW_TEMPLATE,
        payload: template
    }
}

export function editTemplate(template) {
    return {
        type: EDIT_TEMPLATE,
        payload: template
    }
}

export function uploadTemplate(template) {
    return (dispatch) => {
        const user = firebase.auth().currentUser;
        let dbOject = {
            created: new Date(),
            creator: template.creator,
            creator_id: user.uid,
            description: template.description,
            downloaded: 0,
            name: template.name,
            items: template.items
        };

        var db = firebase.firestore();
        return db.collection("templates").add({
            ...dbOject
        }).then(() => {
            const tmp = {...template, private:false};
            dispatch({
                type: UPLOAD_TEMPLATE,
                payload: tmp
            });
        });
    };
}

export function getAllRemoteTemplates() {
    return (dispatch) => {
        var db = firebase.firestore();
        return db.collection("templates").orderBy('downloaded','desc').get().then(function (querySnapshot) {
            let data = [];
            querySnapshot.forEach(function (doc) {
                let d ={
                    ...doc.data(),
                    id: doc.id
                };
                data.push(d);
            });
            dispatch({
                type: GET_ALL_REMOTE_TEMPLATES,
                payload: data
            });
        });
    };
}