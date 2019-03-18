import React from 'react';
import {SegmentedControlIOS, StyleSheet, Text, View} from 'react-native';

export default class MyContent extends React.Component {
    constructor() {
        super();
        this.state = {
        selectedIndex: 'Templates',
    };
    }


    render() {
        return (
            <View style={styles.header}>
            <SegmentedControlIOS
                values={['Templates', 'Games']}
                selectedIndex={this.state.selectedIndex}
                onChange={(event) => {
                    this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                    }
                }

            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        padding: 10,
    }
});
