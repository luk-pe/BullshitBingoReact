import React from 'react';
import {createStackNavigator} from 'react-navigation';

import Browse from '../screens/Browse'

const navOpts = ({navigation}, title) => ({
    title: title
});

const TabBrowse = createStackNavigator({
    Browse: {
        screen: Browse,
        navigationOptions: navOpts(navOpts, "Browse"),
    },
});

export default TabBrowse
