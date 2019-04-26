import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

class TemplateCell extends React.Component {

    render() {
        const {item, onPress} = this.props;

        return (
            <TouchableOpacity
                style={styles.container}
                onPress={onPress}>
                <Text style={styles.templateName}>{item.name}</Text>
                <Text style={styles.templateCreator}>{item.creator}</Text>
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
        templateName: {
            fontSize: 18,
        },
        templateCreator: {
            fontSize: 12,
        }
    }
);

export default TemplateCell;