import React from 'react';
import {StyleSheet, View, Text, Button} from "react-native";
import Game from './Game';
import {generateUUID} from "../utils/UUIDGenerator";

// Redux import
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions';

class Template extends React.Component {

    _shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };

    _onClickMakePublic = () => {
        this.props.uploadTemplate(this.props.navigation.state.params.template).then(() => {
            alert("Your template is now available online!");
        })
            .catch(() => {
                alert("Something went wrong while uploading your template...");
            });
    };

    _onClickStartGame = () => {

        // Create new game and navigte to game
        const template = this.props.navigation.state.params.template;
        let gameItems = [];

        template.items.forEach((item) => {
            gameItems.push({
                name: item,
                checked: false
            });
        });

        this._shuffle(gameItems);

        let game = {
            id: generateUUID(),
            started_at: new Date(),
            name: template.name,
            items: gameItems
        };

        this.props.addGame(game);
        this.props.navigation.navigate('Game', {game: game});
    };

    render() {
        const template = this.props.navigation.state.params.template;
        console.log(template);
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
                    onPress={() => this._onClickStartGame()}
                />
                {
                    !template.downloaded &&
                    <Button
                        title="Make available online"
                        onPress={() => this._onClickMakePublic()}
                    />
                }
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


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addGame: Actions.addGame,
        uploadTemplate: Actions.uploadTemplate
    }, dispatch);
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Template);
