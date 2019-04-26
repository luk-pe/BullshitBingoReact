import React from 'react';
import {createStackNavigator} from 'react-navigation';

import Browse from '../screens/Browse';
import Template from '../screens/Template';

const navOpts = (navigation, title) => ({
    title: title
});

const TabBrowse = createStackNavigator({
    Browse: {
        screen: Browse,
        navigationOptions: navOpts(navOpts, "Browse"),
    },
    Template: {
        screen: Template,
        navigationOptions: navOpts(navOpts, "Template"),
    }
});

export default TabBrowse
