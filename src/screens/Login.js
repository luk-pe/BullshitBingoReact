import React from 'react';
import {Dimensions,StyleSheet, View, Text, TextInput, TouchableOpacity} from "react-native";

// Redux import
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions';

// TODO
// Documentation für Firebase Login
// https://firebase.google.com/docs/auth/web/start?authuser=1

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: "",
            password: ""
        }
    }

    _onChangeMail = (text) => {
        this.setState({mail: text});
    };

    _onChangePassword = (text) => {
        this.setState({password: text});
    }

    _tryLogin = () => {
        const {mail,password} = this.state;
        console.log("Try Login for User: " + mail + " with password " + password);
        this.props.loginUser(mail,password).catch((error) => {

            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(error);
            console.log(errorCode);
            console.log(errorMessage);
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewTop}>
                    <TextInput style={styles.textInput}
                               autoCorrect={false}
                               underlineColorAndroid="transparent"
                               placeholder="E-Mail"
                               placeholderTextColor="white"
                               selectionColor="white"
                               autoCapitalize="none"
                               autoCorrection="none"
                               onChangeText={this._onChangeMail}
                    />
                    <TextInput style={styles.textInput}
                               autoCorrect={false}
                               underlineColorAndroid="transparent"
                               placeholder="Passwort"
                               placeholderTextColor="white"
                               selectionColor="white"
                               autoCapitalize="none"
                               autoCorrection="none"
                               secureTextEntry = {true}
                               onChangeText={this._onChangePassword}
                    />
                </View>
                <View style={styles.viewBottom}>
                    <TouchableOpacity style = {styles.loginButton}
                                      onPress = {() => this._tryLogin()}>
                        <Text style = {styles.loginButtonText}>Anmelden</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    loginButton: {
        borderRadius:20,
        margin: 15,
        padding: 15,
        height: 50,
        width: (Dimensions.get('window').width * 0.8),
        backgroundColor: '#000',
    },
    loginButtonText:{
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
    },
    textInput: {
        margin: 15,
        padding: 15,
        height: 60,
        width: (Dimensions.get('window').width * 0.8),
        borderRadius:20,
        fontSize: 16,
        textAlign: 'center',
        backgroundColor: 'blue',
        color: 'white',
    },
    viewBottom: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flex: 0.3

    },
    viewTop: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flex: 0.7
    }
});


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loginUser: Actions.loginUser
    }, dispatch);
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
