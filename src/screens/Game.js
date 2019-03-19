import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {connect} from "react-redux";

class Game extends React.Component {

    onPress = () => {
        console.log('onPress')
    }
    

    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.Row}>
                        <TouchableOpacity
                            style={styles.Box}
                            onPress={this.onPress}
                        >
                            <Text>Item</Text>
                        </TouchableOpacity>

                    <TouchableOpacity
                            style={styles.Box}
                            onPress={this.onPress}>
                        <Text>Item</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={styles.Box}
                            onPress={this.onPress}>
                        <Text>Item</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={styles.Box}
                            onPress={this.onPress}>
                        <Text>Item</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Row}>
                    <TouchableOpacity
                            style={styles.Box}
                            onPress={this.onPress}>
                        <Text>Item</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={styles.Box}
                            onPress={this.onPress}>
                        <Text>Item</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={styles.Box}
                            onPress={this.onPress}>
                        <Text>Item</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={styles.Box}
                            onPress={this.onPress}>
                        <Text>Item</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Row}>
                    <TouchableOpacity
                            style={styles.Box}
                            onPress={this.onPress}>
                        <Text>Item</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={styles.Box}
                            onPress={this.onPress}>
                        <Text>Item</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={styles.Box}
                            onPress={this.onPress}>
                        <Text>Item</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={styles.Box}
                            onPress={this.onPress}>
                        <Text>Item</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Row}>
                    <TouchableOpacity
                            style={styles.Box}
                            onPress={this.onPress}>
                        <Text>Item</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={styles.Box}
                            onPress={this.onPress}>
                        <Text>Item</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={styles.Box}
                            onPress={this.onPress}>
                        <Text>Item</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={styles.Box}
                            onPress={this.onPress}>
                        <Text>Item</Text>
                    </TouchableOpacity>
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
