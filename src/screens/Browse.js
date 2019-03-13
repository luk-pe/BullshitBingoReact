import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

// Redux import
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions';

class Browse extends React.Component {

    componentDidMount() {
        this._fetchData();
    }

    _fetchData() {
        this.props.getAllRemoteTemplates().then(() => {
            // TODO loading screen / circle
        });

    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.templates}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => {
                        return (
                            <View style={styles.template}>
                                <Text style={styles.templateName}>{item.name}</Text>
                                <Text style={styles.templateCreator}>{item.creator}</Text>
                            </View>
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
        getAllRemoteTemplates: Actions.getAllRemoteTemplates
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        templates: state.templatesReducer.remoteTemplates
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);