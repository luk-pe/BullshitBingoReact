import React from 'react';
import {StyleSheet, View, Text, Button, Alert} from "react-native";
import Game from './Game';
import {generateUUID} from "../utils/UUIDGenerator";
import DialogInput from 'react-native-dialog-input';


// Redux import
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions';
import GameItemBox from "../components/GameItemBox";

class Template extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogVisible: false
        };
    }

    componentDidMount() {
        this.props.navigation.setParams({ title: this.props.navigation.state.params.template.name })
    }

    _shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };

    _onClickMakePublic = () => {
        Alert.alert(
            'Upload template',
            'Do you really want to upload your template?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () => {
                        this.props.uploadTemplate(this.props.navigation.state.params.template).then(() => {
                            alert("Your template is now available online!");
                            this.props.navigation.navigate('MyContent');
                        })
                            .catch(() => {
                                alert("Something went wrong while uploading your template...");
                            });
                    }
                },
            ],
            {cancelable: false},
        );
    };

    _onClickStartGame = () => {
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
            items: gameItems,
            description: template.description
        };

        this.props.addGame(game);
        this.props.navigation.navigate('Game', {game: game});
    };

    _onClickEditDescription = () => {
        this.setState({isDialogVisible: true});
    };

    _renderRow(rowNumber) {
        const items = this.props.navigation.state.params.template.items;
        let boxes = [];
        for (let i = 0; i < 4; i++) {
            const index = i + (4 * rowNumber);
            boxes.push(
                <GameItemBox key={index} item={items[index]} onPress={null}/>
            );
        }

        return (
            <View key={rowNumber} style={styles.Row}>
                {boxes}
            </View>
        );
    }

    _renderRows() {
        let rows = [];
        for (let i = 0; i < 4; i++) {
            rows.push(this._renderRow(i));
        }

        return (rows);
    }

    render() {
        let template = this.props.navigation.state.params.template;
        return (
            <View style={styles.Container}>
                <View style={styles.Description}>
                    <Text>{template.description}</Text>
                    <Button
                        title="Change Description"
                        onPress={() => this._onClickEditDescription()}
                    />
                    <DialogInput isDialogVisible={this.state.isDialogVisible}
                                 title={"Change Description"}
                                 message={"Edit the description and press Submit"}
                                 initValueTextInput={template.description}
                                 submitInput={(inputText) => {
                                     template.description = inputText;
                                     this.props.editTemplate(template);
                                     this.setState({isDialogVisible: false})
                                 }}

                                 closeDialog={() => {
                                     this.setState({isDialogVisible: false})
                                 }}>
                    </DialogInput>
                </View>
                {this._renderRows()}
                <Button
                    title="Start a Game"
                    onPress={() => this._onClickStartGame()}
                />
                {
                    template.private &&
                    <Button
                        title="Make available online"
                        onPress={() => this._onClickMakePublic()}
                    />
                }
                {
                    !template.private &&
                    <Text style={{alignSelf: 'center'}}>Template is available online!</Text>
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
    },
    Description: {
        justifyContent: 'flex-start',
    }
});


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addGame: Actions.addGame,
        editTemplate: Actions.editTemplate,
        uploadTemplate: Actions.uploadTemplate
    }, dispatch);
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Template);
