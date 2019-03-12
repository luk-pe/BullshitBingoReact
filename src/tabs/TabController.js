import React from 'react'
import {
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation'
import Icon from "react-native-vector-icons/FontAwesome"

import TabBrowse from './TabBrowse';
import TabMyContent from './TabMyContent';
import TabSearch from './TabSearch';

const TabController = createBottomTabNavigator({
    TabBrowse: {
        screen: TabBrowse,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name={"home"} size={18} color={tintColor} />,
            title: "Browse"
        }
    },
    MyContent: {
        screen: TabMyContent,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name={"th"} size={18} color={tintColor} />,
            title: "My Content"
        }
    },
    TabSearch: {
        screen: TabSearch,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name={"search"} size={18} color={tintColor} />,
            title: "Search"
        }
    }
});

const AppContainer = createAppContainer(TabController);

export default AppContainer;
