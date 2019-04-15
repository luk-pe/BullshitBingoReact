import React from 'react';
import {createStackNavigator} from 'react-navigation';

import User from "../screens/User";

const navOpts = ({navigation}, title) => ({
    title: title
});

const TabUser = createStackNavigator({
    Search: {
        screen: User,
        navigationOptions: navOpts(navOpts, "User"),
    },
});

export default TabUser
