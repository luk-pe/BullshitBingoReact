import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

export const SET_USER = 'SET_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const ADD_SUBSCRIBES_TO = 'ADD_SUBSCRIBES_TO';
export const GET_SUBSCRIBES_TO = 'GET_SUBSCRIBES_TO';

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

export function createUser(email, password) {
    return (dispatch) => {
        const auth = firebase.auth();
        return auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                // Add user to firestore after creation
                const user = auth.currentUser;
                const db = firebase.firestore();
                return db.collection("users").doc(user.uid).set({
                    name: "No name",
                    email: user.email,
                    subscribers: [],
                    subscribes_to: []
                })
                    .then(function () {
                        dispatch({
                            type: SET_USER,
                            payload: user
                        });
                    });
            });
    };
}

export function updateUsername(name) {
    return (dispatch) => {
        const auth = firebase.auth();
        const user = auth.currentUser;
        return user.updateProfile({
            displayName: name
        }).then(function () {
            const db = firebase.firestore();
            return db.collection("users").doc(user.uid).update({
                name: name
            })
                .then(function () {
                    dispatch({
                        type: SET_USER,
                        payload: user
                    });
                });
        });
    };
}

export function checkUserStatus() {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const auth = firebase.auth();
            auth.onAuthStateChanged(function (user) {
                resolve();
                if (user) {
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

export function getSubscribesTo() {
    return (dispatch) => {
        const db = firebase.firestore();
        const currentUser = firebase.auth().currentUser;
        return db.collection("users").doc(currentUser.uid).get().then(function (doc) {
            let users = [];
            doc.data().subscribes_to.forEach(u => users.push(u));
            dispatch({
                type: GET_SUBSCRIBES_TO,
                payload: users
            });
        });
    };
}

export function subscribeToUser(email) {
    // Check if exists
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const db = firebase.firestore();
            const query = db.collection("users").where("email", "==", email).limit(1);
            return query.get().then(function (querySnapshot) {
                if (querySnapshot.size === 1) {
                    let user = {};
                    querySnapshot.forEach(doc => {
                        user ={
                            ...doc.data(),
                            uid: doc.id
                        };
                    });

                    // Add to subscriber list
                    const currentUser = firebase.auth().currentUser;
                    return db.collection("users").doc(user.uid).update({
                        subscribers: firebase.firestore.FieldValue.arrayUnion(currentUser.uid)
                    })
                        .then(function () {
                            let subscriberDetails = {uid: user.uid, email: user.email};
                            return db.collection("users").doc(currentUser.uid).update({
                                subscribes_to: firebase.firestore.FieldValue.arrayUnion(subscriberDetails)
                            }).then(() => {
                                resolve();
                                dispatch({
                                    type: ADD_SUBSCRIBES_TO,
                                    payload: subscriberDetails
                                });
                            }).catch(() => reject("Error while subscribe to user"));
                        }).catch(() => reject("Error while subscribe to user"));
                } else {
                    reject("User not found");
                }
            });
        });
    };
}