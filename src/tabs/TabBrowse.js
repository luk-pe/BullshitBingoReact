import React from 'react';
import {createStackNavigator, HeaderBackButton} from 'react-navigation';

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
        navigationOptions: ({navigation}) => ({
            title: navigation.state.params.title || 'Template',
        })
    }
});

export default TabBrowse
