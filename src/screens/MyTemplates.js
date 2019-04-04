import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity} from 'react-native';
import Game from './Game';
import Template from './Template';
// Redux import
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions';

class MyTemplates extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.templates}
                    keyExtractor={(item) => item.title}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity
                                              style={styles.template}
                                              onPress ={() => this.props.navigation.navigate('Template', {template: item})}
                            >
                                <Text style={styles.templateName}>{item.title}</Text>
                                <Text style={styles.templateCreator}>{item.title}</Text>
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
        template: {
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        templates: state.templatesReducer.templates
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTemplates);