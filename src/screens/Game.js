import React from 'react';
import {Share, StyleSheet, View, Text, TouchableOpacity, Button} from "react-native";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Actions from "../redux/actions";

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
            const result = Share.share({
                message:
                    'I CALL BINGO!!! Looks like I won the "' + game.name + '" game!',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    onPress = (position) => {
        let checked = this.state.game.items[position].checked;
        checked = !checked;
        let state = this.state;
        state.game.items[position].checked = checked;
        this.setState({state: state});
        if(this.isBingo()){
            console.log('Bingo');
        };

        this.props.saveGame(this.state.game);
    }

    isBingo(){
        //vertical
        for (i = 0; i < 4; i++){
            if (this.state.game.items[i].checked && this.state.game.items[i + 4].checked && this.state.game.items[i+8].checked && this.state.game.items[i+12].checked){
                return true;
            }
        }
        //horizontal
        for(i = 0; i < 13; i += 4){
            if (this.state.game.items[i].checked && this.state.game.items[i + 1].checked && this.state.game.items[i+2].checked && this.state.game.items[i+3].checked){
                return true;
            }
        }
        //cross
        if(this.state.game.items[0].checked && this.state.game.items[5].checked && this.state.game.items[10].checked && this.state.game.items[15].checked){
            return true;
        }
        if(this.state.game.items[3].checked && this.state.game.items[6].checked && this.state.game.items[9].checked && this.state.game.items[12].checked){
            return true;
        }
    }

    render() {


        if (this.state.game) {
            return (
                <View style={styles.Container}>
                    <View style={styles.Description}>
                        <Text >{this.state.game.description}</Text>
                    </View>
                    <View style={styles.Row}>
                        <TouchableOpacity
                            style={this.state.game.items[0].checked ? styles.CheckedBox : styles.Box}
                            onPress={() =>this.onPress(0)}
                        >
                            <Text>{this.state.game.items[0].name}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={this.state.game.items[1].checked ? styles.CheckedBox : styles.Box}
                            onPress={() =>this.onPress(1)}
                        >
                            <Text>{this.state.game.items[1].name}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.game.items[2].checked ? styles.CheckedBox : styles.Box}
                            onPress={() =>this.onPress(2)}
                        >
                            <Text>{this.state.game.items[2].name}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.game.items[3].checked ? styles.CheckedBox : styles.Box}
                            onPress={() =>this.onPress(3)}
                        >
                            <Text>{this.state.game.items[3].name}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Row}>
                        <TouchableOpacity
                            style={this.state.game.items[4].checked ? styles.CheckedBox : styles.Box}
                            onPress={() =>this.onPress(4)}
                        >
                            <Text>{this.state.game.items[4].name}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.game.items[5].checked ? styles.CheckedBox : styles.Box}
                            onPress={() =>this.onPress(5)}
                        >
                            <Text>{this.state.game.items[5].name}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.game.items[6].checked ? styles.CheckedBox : styles.Box}
                            onPress={() =>this.onPress(6)}
                        >
                            <Text>{this.state.game.items[6].name}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.game.items[7].checked ? styles.CheckedBox : styles.Box}
                            onPress={() =>this.onPress(7)}
                        >
                            <Text>{this.state.game.items[7].name}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Row}>
                        <TouchableOpacity
                            style={this.state.game.items[8].checked ? styles.CheckedBox : styles.Box}
                            onPress={() =>this.onPress(8)}
                        >
                            <Text>{this.state.game.items[8].name}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.game.items[9].checked ? styles.CheckedBox : styles.Box}
                            onPress={() =>this.onPress(9)}
                        >
                            <Text>{this.state.game.items[9].name}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.game.items[10].checked ? styles.CheckedBox : styles.Box}
                            onPress={() =>this.onPress(10)}
                        >
                            <Text>{this.state.game.items[10].name}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.game.items[11].checked ? styles.CheckedBox : styles.Box}
                            onPress={() =>this.onPress(11)}
                        >
                            <Text>{this.state.game.items[11].name}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Row}>
                        <TouchableOpacity
                            style={this.state.game.items[12].checked ? styles.CheckedBox : styles.Box}
                            onPress={() =>this.onPress(12)}
                        >
                            <Text>{this.state.game.items[12].name}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.game.items[13].checked ? styles.CheckedBox : styles.Box}
                            onPress={() =>this.onPress(13)}
                        >
                            <Text>{this.state.game.items[13].name}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.game.items[14].checked ? styles.CheckedBox : styles.Box}
                            onPress={() =>this.onPress(14)}
                        >
                            <Text>{this.state.game.items[14].name}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.game.items[15].checked ? styles.CheckedBox : styles.Box}
                            onPress={() =>this.onPress(15)}
                        >
                            <Text>{this.state.game.items[15].name}</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        this.isBingo() &&
                        <Button
                            title="Call Bingo"
                            onPress={() => this._callBingo()}
                        />
                    }
                </View>
            );
        } else {
            return(<View></View>);
        }
    }
}
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
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
    CheckedBox: {
        backgroundColor: '#F4A460',
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
        saveGame: Actions.saveGame
    }, dispatch);
}

function mapStateToProps() {
    return {
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);
