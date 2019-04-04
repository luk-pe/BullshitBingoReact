import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity} from 'react-native';
import moment from 'moment';
import Template from './Template';
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
                            <TouchableOpacity
                                              style={styles.game}
                                              onPress ={() => this.props.navigation.navigate('Template', {template: item})}
                            >
                                <Text style={styles.gameName}>{item.name}</Text>
                                <Text style={styles.gameDate}>Gestartet: {moment(item.started_at).format("DD.MM.YYYY HH:mm")} Uhr</Text>
                            </TouchableOpacity>
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
            flex: 1,
        },
        game: {
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'flex-start',
            marginHorizontal: 4,
            marginVertical: 2,
            padding: 5,
        },
        gameName: {
            fontSize: 18,
        },
        gameDate: {
            fontSize: 12,
        }
    }
);

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        games: state.gamesReducer.games
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyGames);