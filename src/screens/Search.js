import React from 'react';
import {StyleSheet, View, FlatList, RefreshControl,} from 'react-native';
import {SearchBar} from 'react-native-elements';
import TemplateCell from "../components/TemplateCell";

// Redux import
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            textValue: "",
            data: null
        }
    }

    componentDidMount() {
        this._fetchData();
    }

    _fetchData() {
        this.setState({isLoading: true});
        this.props.getAllRemoteTemplates().then(() => {
            // TODO loading screen / circle
            this.setState({data: this.props.templates});
        }).finally(() => this.setState({isLoading: false}));
    }

    _searchFilterFunction = (text) => {
        const newData = this.props.templates.filter(item => {
            const itemData = `${item.name.toUpperCase()}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            data: newData,
            textValue: text
        });
    };

    _renderHeader = () => {
        return (
            <SearchBar
                placeholder="Type Here..."
                platform={'ios'}
                round
                onChangeText={text => this._searchFilterFunction(text)}
                autoCorrect={false}
                value={null}
            />
        );
    };

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
                    data={this.state.data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => {
                        return (
                            <TemplateCell item={item}
                                          onPress={() => this.props.navigation.navigate('Template', {template: item})}/>
                        );
                    }}
                    ListHeaderComponent={this._renderHeader}
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
        getAllRemoteTemplates: Actions.getAllRemoteTemplates
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        templates: state.templatesReducer.remoteTemplates
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);