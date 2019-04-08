import React from 'react';
import {createStackNavigator} from 'react-navigation';

import MyContent from "../screens/MyContent";
import Game from "../screens/Game";

const navOpts = (navigation, title) => ({
    title: title
});

const TabMyContent = createStackNavigator({
    MyContent: {
        screen: MyContent,
        navigationOptions: ({navigation}) => navOpts(navigation, "MyContent"),
    },
    Game: {
        screen: Game,
        navigationOptions: navOpts(navOpts, "Game"),
    },
});

export default TabMyContent
