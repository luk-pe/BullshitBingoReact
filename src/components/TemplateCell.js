import React from 'react';
import {StyleSheet, Text, TouchableOpacity,View} from 'react-native';

class TemplateCell extends React.Component {

    render() {
        const {item, onPress} = this.props;

        return (
            <TouchableOpacity
                style={styles.container}
                onPress={onPress}>
                <View style={styles.viewLeft}>
                    <Text style={styles.templateName}>{item.name}</Text>
                    <Text style={styles.templateCreator}>{item.creator}</Text>
                </View>
                {
                    // Only if downloaded attribute available
                    item.downloaded > 0 &&
                    <View style={styles.viewRight}>
                        <Text>🔥 {item.downloaded}</Text>
                    </View>
                }
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
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
        },
        viewLeft: {
            flex: 0.8
        },
        viewRight: {
            alignItems: 'center',
            alignSelf: 'center',
            flex: 0.2
        }
    }
);

export default TemplateCell;