import React from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl, TouchableOpacity} from 'react-native';
import Game from './Game';
import Template from './Template';
// Redux import
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions';

class Browse extends React.Component {
    constructor(props) {
        super(props);

        this.state =  {
            isLoading: false
        }
    }

    componentDidMount() {
        this._fetchData();
    }

    _fetchData() {
        this.setState({isLoading: true});
        this.props.getAllRemoteTemplates().finally(() => {
            this.setState({isLoading: false});
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isLoading}
                            onRefresh={() => this._fetchData()}
                        />
                    }
                    data={this.props.templates}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity
                                              style={styles.template}
                                              onPress ={() => this.props.navigation.navigate('Template', {template: item})}
                            >
                                <Text style={styles.templateName}>{item.name}</Text>
                                <Text style={styles.templateCreator}>{item.creator}</Text>
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
        getAllRemoteTemplates: Actions.getAllRemoteTemplates,
        addTemplate: Actions.addTemplate
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        templates: state.templatesReducer.remoteTemplates
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);