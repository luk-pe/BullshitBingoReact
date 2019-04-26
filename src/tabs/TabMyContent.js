import React from 'react';
import {Button, StyleSheet, View} from "react-native";
import {createStackNavigator,HeaderBackButton} from 'react-navigation';

import MyContent from "../screens/MyContent";
import Game from "../screens/Game";
import Template from "../screens/Template";
import NewTemplate from "../screens/NewTemplate";

const navOpts = (navigation, title) => ({
    title: title
});

const styles = StyleSheet.create({
        button: {
            marginRight: 15,

        },
    }
);

const TabMyContent = createStackNavigator({
    MyContent: {
        screen: MyContent,
        navigationOptions: ({navigation}) => ({
            title: "MyContent",
            headerRight: (
                <View style={styles.button}>
                    <Button
                        onPress={() => {
                            navigation.navigate('NewTemplate')
                        }}
                        title="+"
                    />
                </View>
            ),
        }),
    },
    NewTemplate: {
        screen: NewTemplate,
        navigationOptions: navOpts(navOpts, "NewTemplate"),
    },
    MyTemplate: {
        screen: Template,
        navigationOptions: ({navigation}) => ({
            title: "Template",
            headerLeft:  <HeaderBackButton
                onPress={() => navigation.navigate('MyContent')}
            />
        })
    },
    Game: {
        screen: Game,
        navigationOptions: navOpts(navOpts, "Game"),
    },
});

export default TabMyContent
