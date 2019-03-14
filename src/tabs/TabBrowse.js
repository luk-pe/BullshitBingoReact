import React from 'react';
import {createStackNavigator} from 'react-navigation';

import Browse from '../screens/Browse';
import Game from '../screens/Game';
const navOpts = ({navigation}, title) => ({
    title: title
});

const TabBrowse = createStackNavigator({
    Browse: {
        screen: Browse,
        navigationOptions: navOpts(navOpts, "Browse"),
    },
    Game: {
        screen: Game,
        navigationOptions: navOpts(navOpts, "Game"),
    },
});

export default TabBrowse
