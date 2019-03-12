import React from 'react';
import {createStackNavigator} from 'react-navigation';

import MyContent from "../screens/MyContent";

const navOpts = ({navigation}, title) => ({
    title: title
});

const TabMyContent = createStackNavigator({
    MyContent: {
        screen: MyContent,
        navigationOptions: navOpts(navOpts, "My Content"),
    },
});

export default TabMyContent
