import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import Browse from '../screens/Browse';
import Game from '../screens/Game';
import Template from '../screens/Template';
import NewTemplate  from '../screens/NewTemplate';

const navOpts = (navigation, title,  button) => ({
    title: title,
    headerRight: (
        //TODO: clean solution to show the button only in Browse View not in NewTemplate or Game View
            <View style={styles.button}>
                <Button
                    onPress={() => {
                        navigation.navigate('NewTemplate')
                    }


                    }
                    title={button}
                />
            </View>

    ),
});

const styles = StyleSheet.create({
        button: {
            marginRight: 15,

        },
    }
);

const TabBrowse = createStackNavigator({
    Browse: {
        screen: Browse,
        navigationOptions: ({navigation}) => navOpts(navigation, "Browse", '+'),
    },
    Game: {
        screen: Game,
        navigationOptions: navOpts(navOpts, "Game",  ''),
    },
    Template: {
        screen: Template,
        navigationOptions: navOpts(navOpts, "Template", ''),
    },
    NewTemplate:{
        screen: NewTemplate,
        navigationOptions: navOpts(navOpts, "NewTemplate", ''),
    }

});

export default TabBrowse
