import React from 'react';
import {createStackNavigator} from 'react-navigation';

import Search from "../screens/Search";

const navOpts = ({navigation}, title) => ({
    title: title
});

const TabSearch = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: navOpts(navOpts, "Search"),
    },
});

export default TabSearch
