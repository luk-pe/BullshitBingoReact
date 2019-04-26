import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import GameCell from "../components/GameCell";
// Redux import
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions';

class MyGames extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.games}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => {
                        return (
                            <GameCell item={item} onPress={() => this.props.navigation.navigate('Game', {game: item})}/>
                        );
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            backgroundColor: '#EDEDED',
            flex: 1
        }
    }
);

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
    return {
        games: state.gamesReducer.games
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyGames);