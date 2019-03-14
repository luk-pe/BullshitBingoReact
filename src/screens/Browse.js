import React from 'react';
import { StyleSheet, Text, View, FlatList, Button,} from 'react-native';
import Game from './Game';
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
            console.log(this.props.templates);
        });
    }

    render() {
        var Template = [

            {name:"T1",creator:"ALALA"},{name:"T2",creator:"Bla"}

    ]
        return (
            <View style={styles.Container}>
            <FlatList
                data={Template}
                renderItem={({item}) => {

                    return(

                        <View style={styles.Template}>
                        <Text style={styles.TemplateName}>{item.name}</Text>
                        <Text style={styles.TemplateCreator}>{item.creator}</Text>
                        </View>

                    );

                }}
            />
                <Button
                    title="Start a Game"
                    onPress={() => this.props.navigation.navigate('Game')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor: '#EDEDED',
        flex: 1,
    },
    Template: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        marginHorizontal: 4,
        marginVertical: 2,
        padding: 5,
    },
    TemplateName: {
        fontSize: 18,
    },
    TemplateCreator: {
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