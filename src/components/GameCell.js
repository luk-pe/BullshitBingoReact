import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';

class GameCell extends React.Component {

    render() {
        const {item, onPress} = this.props;

        return (
            <TouchableOpacity
                style={styles.container}
                onPress={onPress}
            >
                <Text style={styles.gameName}>{item.name}</Text>
                <Text style={styles.gameDate}>Gestartet: {moment(item.started_at).format("DD.MM.YYYY HH:mm")} Uhr</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
        container: {
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

export default GameCell;