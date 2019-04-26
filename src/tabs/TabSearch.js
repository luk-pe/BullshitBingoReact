import React from 'react';
import {createStackNavigator} from 'react-navigation';

import Search from "../screens/Search";
import Template from "../screens/Template";

const navOpts = ({navigation}, title) => ({
    title: title
});

const TabSearch = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: navOpts(navOpts, "Search"),
    },
    SearchTemplate: {
        screen: Template,
        navigationOptions: navOpts(navOpts, "Template"),
    },
});

export default TabSearch
