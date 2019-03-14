import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import {connect} from "react-redux";

class Game extends React.Component {

    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.Row}>
                    <View style={styles.Box}>
                        <Text>Item</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>Item</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>Item</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>Item</Text>
                    </View>
                </View>
                <View style={styles.Row}>
                    <View style={styles.Box}>
                        <Text>Item</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>Item</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>Item</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>Item</Text>
                    </View>
                </View>
                <View style={styles.Row}>
                    <View style={styles.Box}>
                        <Text>Item</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>Item</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>Item</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>Item</Text>
                    </View>
                </View>
                <View style={styles.Row}>
                    <View style={styles.Box}>
                        <Text>Item</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>Item</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>Item</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>Item</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#EDEDED',
        flex: 1,
        justifyContent: 'center',
        padding: 2,

    },
    Row: {
        backgroundColor: '#EDEDED',
        flexDirection: 'row',

    },
    Box: {
        backgroundColor: 'white',
        flex: 1,
        margin: 2,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
});


export default Game;
