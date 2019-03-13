import React from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/redux/reducers';

import TabController from './src/tabs/TabController.js';

const store = createStore(reducers,applyMiddleware(thunk));


import * as firebase from 'firebase';

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
                <TabController/>
            </Provider>
        );
    }
}