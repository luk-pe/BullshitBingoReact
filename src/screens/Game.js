import React from 'react';
import {Share, StyleSheet, View, Text, TouchableOpacity, Button} from "react-native";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Actions from "../redux/actions";
import GameItemBox from "../components/GameItemBox";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: null
        };
    }

    componentDidMount() {
        const game = this.props.navigation.state.params.game;
        this.setState({game: game});
    }

    _callBingo = () => {
        try {
            const game = this.props.navigation.state.params.game;
            Share.share({
                message:
                    'I CALL BINGO!!! Looks like I won the "' + game.name + '" game!',
            });
        } catch (error) {
            alert(error.message);
        }
    };

    _onPress = (position) => {
        let checked = this.state.game.items[position].checked;
        checked = !checked;
        let state = this.state;
        state.game.items[position].checked = checked;
        this.setState({state: state});
        this.props.saveGame(this.state.game);
    };

    _isBingo() {
        //vertical
        for (i = 0; i < 4; i++) {
            if (this.state.game.items[i].checked && this.state.game.items[i + 4].checked && this.state.game.items[i + 8].checked && this.state.game.items[i + 12].checked) {
                return true;
            }
        }
        //horizontal
        for (i = 0; i < 13; i += 4) {
            if (this.state.game.items[i].checked && this.state.game.items[i + 1].checked && this.state.game.items[i + 2].checked && this.state.game.items[i + 3].checked) {
                return true;
            }
        }
        //cross
        if (this.state.game.items[0].checked && this.state.game.items[5].checked && this.state.game.items[10].checked && this.state.game.items[15].checked) {
            return true;
        }
        if (this.state.game.items[3].checked && this.state.game.items[6].checked && this.state.game.items[9].checked && this.state.game.items[12].checked) {
            return true;
        }
    }

    _renderRow(rowNumber) {
        const items = this.state.game.items;
        let boxes = [];
        for (let i=0;i<4;i++) {
            const index = i + (4 * rowNumber);
            boxes.push(
                <GameItemBox key={index} item={items[index]} onPress={() => this._onPress(index)}/>
            );
        }

        return(
            <View key={rowNumber} style={styles.Row}>
                {boxes}
            </View>
        );
    }

    _renderRows() {
        let rows = [];
        for (let i=0;i<4;i++) {
            rows.push(this._renderRow(i));
        }

        return(rows);
    }

    render() {
        if (this.state.game) {
            return (
                <View style={styles.Container}>
                    <View style={styles.Description}>
                        <Text>{this.state.game.description}</Text>
                    </View>
                    {this._renderRows()}
                    {
                        this._isBingo() &&
                        <Button
                            title="Call Bingo"
                            onPress={() => this._callBingo()}
                        />
                    }
                </View>
            );
        } else {
            return (<View></View>);
        }
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
    Description: {
        justifyContent: 'flex-start',
    }

});


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        saveGame: Actions.saveGame
    }, dispatch);
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
