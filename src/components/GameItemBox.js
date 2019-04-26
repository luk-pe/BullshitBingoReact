import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

class GameItemBox extends React.Component {

    render() {
        const {item, onPress} = this.props;
        return (
            <TouchableOpacity
                style={item.checked ? styles.CheckedBox : styles.Box}
                onPress={onPress}
            >
                <Text>{item.name}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
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
        }
    }
);

export default GameItemBox;