import React from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore,persistReducer} from 'redux-persist'
import AsyncStorage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import {PersistGate} from 'redux-persist/integration/react';
import reducers from './src/redux/reducers';
import * as firebase from 'firebase';

import SplashScreen from './src/screens/SplashScreen.js';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, {}, compose(applyMiddleware(thunk)));
const persistor = persistStore(store);

// TODO Für Debugging
// Folgende Zeile auskommentieren um PersistStore zu löschen -> Gesamter Speicher wird geleert
// persistor.purge();

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCgGmHIs0OkMfgI-yJSu1DWt6Gcs1yf12Y",
    authDomain: "bullshitbingo-4bdac.firebaseapp.com",
    databaseURL: "https://bullshitbingo-4bdac.firebaseio.com",
    projectId: "bullshitbingo-4bdac",
    storageBucket: "bullshitbingo-4bdac.appspot.com",
    messagingSenderId: "588446935163"
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<SplashScreen/>} persistor={persistor}>
                    <SplashScreen/>
                </PersistGate>
            </Provider>
        );
    }
}