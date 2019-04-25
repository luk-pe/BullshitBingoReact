import React from 'react';
import {createStackNavigator} from 'react-navigation';

import MyContent from "../screens/MyContent";
import Game from "../screens/Game";
import Template from "../screens/Template";

const navOpts = (navigation, title) => ({
    title: title
});

const TabMyContent = createStackNavigator({
    MyContent: {
        screen: MyContent,
        navigationOptions: ({navigation}) => navOpts(navigation, "MyContent"),
    },
    MyTemplate: {
        screen: Template,
        navigationOptions: navOpts(navOpts, "Template"),
    },
    Game: {
        screen: Game,
        navigationOptions: navOpts(navOpts, "Game"),
    },
});

export default TabMyContent
