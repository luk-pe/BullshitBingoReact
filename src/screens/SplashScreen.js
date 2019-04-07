import React from 'react';
import {StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions';

import Login from './Login.js';
import TabController from './../tabs/TabController.js';

class SplashScreen extends React.Component {

    componentDidMount() {
        console.log(this.props.user);
    }

    render() {
        if (this.props.user) {
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
        loginUser: Actions.loginUser
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
