import React from 'react';
import { StyleSheet, Text, View, FlatList, Button,} from 'react-native';
import {SearchBar } from 'react-native-elements';

import Game from './Game';
// Redux import
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: "",
            data:null
        }
    }

    componentDidMount() {
        this._fetchData();
    }

    _fetchData() {
        this.props.getAllRemoteTemplates().then(() => {
            // TODO loading screen / circle
            this.setState({data: this.props.templates});
        });
    }
    searchFilterFunction = (text) => {
        const newData = this.props.templates.filter(item => {
            const itemData = `${item.name.toUpperCase()}  ${item.creator.toUpperCase()}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            data: newData,
            textValue: text
        });
    };

    renderHeader = () => {
        return (
            <SearchBar
                placeholder="Type Here..."
                platform={'ios'}
                round
                onChangeText={text => this.searchFilterFunction(text)}
                autoCorrect={false}
                value={null}
            />
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => {
                        return (
                            <View style={styles.template}>
                                <Text style={styles.templateName}>{item.name}</Text>
                                <Text style={styles.templateCreator}>{item.creator}</Text>
                            </View>
                        );
                    }}
                    ListHeaderComponent={this.renderHeader}
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);