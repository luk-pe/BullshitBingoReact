import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import Browse from '../screens/Browse';
import Game from '../screens/Game';
import NewTemplate  from '../screens/NewTemplate';

const navOpts = (navigation, title) => ({
    title: title,
    headerRight: (

        <View style={styles.button}>
        <Button
            onPress={() => {
                navigation.navigate('NewTemplate')
            }


            }
            title="+"
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
        navigationOptions: ({navigation}) => navOpts(navigation, "Browse"),
    },
    Game: {
        screen: Game,
        navigationOptions: navOpts(navOpts, "Game"),
    },
    NewTemplate:{
        screen: NewTemplate,
        navigationOptions: navOpts(navOpts, "NewTemplate"),
    }

});

export default TabBrowse
