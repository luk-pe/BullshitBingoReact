import React from 'react';
import {StyleSheet, View, Text, Button} from "react-native";
import Game from './Game';
class Template extends React.Component {


    render() {
        const template = this.props.navigation.state.params.template;
        return (
            <View style={styles.Container}>
                <View style={styles.Row}>
                    <View style={styles.Box}>
                        <Text>{template.items[0]}</Text>
                    </View>

                    <View style={styles.Box}>
                        <Text>{template.items[1]}</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>{template.items[2]}</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>{template.items[3]}</Text>
                    </View>
                </View>
                <View style={styles.Row}>
                    <View style={styles.Box}>
                        <Text>{template.items[4]}</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>{template.items[5]}</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>{template.items[6]}</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>{template.items[7]}</Text>
                    </View>
                </View>
                <View style={styles.Row}>
                    <View style={styles.Box}>
                        <Text>{template.items[8]}</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>{template.items[9]}</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>{template.items[10]}</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>{template.items[11]}</Text>
                    </View>
                </View>
                <View style={styles.Row}>
                    <View style={styles.Box}>
                        <Text>{template.items[12]}</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>{template.items[13]}</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>{template.items[14]}</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text>{template.items[15]}</Text>
                    </View>
                </View>
                <Button
                    title="Start a Game"
                    onPress={() => this.props.navigation.navigate('Game', {template: template})}
                />
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


export default Template;
