import React from 'react';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/redux/reducers';

import TabController from './src/tabs/TabController.js';

const store = createStore(reducers);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <TabController/>
            </Provider>
        );
    }
}