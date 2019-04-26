import React from 'react';
import {StyleSheet, View, FlatList, RefreshControl} from 'react-native';
import TemplateCell from '../components/TemplateCell';

// Redux import
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions';

class Browse extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
                            <TemplateCell item={item}
                                          onPress={() => this.props.navigation.navigate('Template', {template: item})}/>
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
            flex: 1
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