import * as firebase from 'firebase';
import 'firebase/firestore';
import {generateUUID} from "../../utils/UUIDGenerator";

export const GET_ALL_TEMPLATES = 'GET_ALL_TEMPLATES';
export const GET_ALL_REMOTE_TEMPLATES = 'GET_ALL_REMOTE_TEMPLATES';
export const ADD_NEW_TEMPLATE = 'ADD_NEW_TEMPLATE';

export function addNewTemplate(template) {

    let newTemplate = {
        ...template,
        id: generateUUID()
    };

    return {
        type: ADD_NEW_TEMPLATE,
        payload: newTemplate
    }
}

export function getAllTemplates() {
    return {
        type: GET_ALL_TEMPLATES,
        payload: []
    }
}

export function uploadTemplate(template) {
    return (dispatch) => {
        console.log(template);
        let dbOject = {

        };
    };
}

export function getAllRemoteTemplates() {
    return (dispatch) => {
        var db = firebase.firestore();
        return db.collection("templates").get().then(function (querySnapshot) {
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