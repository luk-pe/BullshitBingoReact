import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions';

import Login from './Login.js';
import TabController from './../tabs/TabController.js';

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        this.props.checkUserStatus().finally(() => {
            this.setState({isLoading:false});
        })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <Text>Logging in</Text>
                    <Text>Please wait...</Text>
                </View>
            );
        }
        if (!this.state.isLoading && this.props.user) {
            return (<TabController/>);
        } else {
            return (<Login/>);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        checkUserStatus: Actions.checkUserStatus,
        loginUser: Actions.loginUser
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
