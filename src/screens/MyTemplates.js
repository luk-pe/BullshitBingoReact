import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity} from 'react-native';
import Game from './Game';
import Template from './Template';
import TemplateCell from "../components/TemplateCell";
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
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => {
                        return (
                            <TemplateCell item={item} onPress ={() => this.props.navigation.navigate('MyTemplate', {template: item})}/>
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