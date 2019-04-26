import React from 'react';
import {Dimensions, StyleSheet, View, Text, TextInput, TouchableOpacity} from "react-native";
import Register from './Register.js';
import * as firebase from 'firebase';
import 'firebase/auth';

// Redux import
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions';
import DialogInput from "react-native-dialog-input";


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isForgotPasswordAlertOpen: false,
            isLoading: false,
            mail: "",
            password: "",
            renderRegister: false
        }
    }

    _onChangeMail = (text) => {
        this.setState({mail: text});
    };

    _onChangePassword = (text) => {
        this.setState({password: text});
    }

    _tryLogin = () => {
        this.setState({isLoading: true});
        const {mail, password} = this.state;
        this.props.loginUser(mail, password).catch((error) => {
            alert(error.message);
            this.setState({isLoading: false});
        });
    };

    _sendNewPassword = (emailAddress) => {
        this.setState({isForgotPasswordAlertOpen: false});
        firebase.auth().sendPasswordResetEmail(emailAddress).then(function () {
            alert("Please check your Inbox");
        }).catch(function (error) {
            alert("Error while sending new password");
        });
    };

    _renderLogin = () => {
        this.setState({renderRegister: false});
    };

    render() {

        if (this.state.renderRegister) {
            return (<Register goBack={this._renderLogin}/>);
        }

        return (
            <View style={styles.container}>
                <View style={styles.viewTop}>
                    <Text style={{fontSize: 40}}>LOGIN</Text>
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
                               placeholder="Password"
                               placeholderTextColor="white"
                               selectionColor="white"
                               autoCapitalize="none"
                               autoCorrection="none"
                               secureTextEntry={true}
                               onChangeText={this._onChangePassword}
                    />
                    <TouchableOpacity
                        disabled={this.state.isLoading}
                        onPress={() => {
                            this.setState({isForgotPasswordAlertOpen: true})
                        }}>
                        <Text style={{color: 'blue'}}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewBottom}>
                    <TouchableOpacity
                        disabled={this.state.isLoading}
                        style={styles.loginButton}
                        onPress={() => this._tryLogin()}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        disabled={this.state.isLoading}
                        style={styles.loginButton}
                        onPress={() => this.setState({renderRegister: true})}>
                        <Text style={styles.loginButtonText}>New? Register!</Text>
                    </TouchableOpacity>
                </View>
                <DialogInput isDialogVisible={this.state.isForgotPasswordAlertOpen}
                             title={"Forgot password"}
                             message={"You forgot your password? No worries, just enter your E-Mail address and we send you a new one!"}
                             hintInput={"test@mail.com"}
                             submitInput={(inputText) => {
                                 this._sendNewPassword(inputText)
                             }}
                             closeDialog={() => {
                                 this.setState({isForgotPasswordAlertOpen: false})
                             }}>
                </DialogInput>
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
        borderRadius: 20,
        margin: 15,
        padding: 15,
        height: 50,
        width: (Dimensions.get('window').width * 0.8),
        backgroundColor: '#000',
    },
    loginButtonText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
    },
    textInput: {
        margin: 15,
        padding: 15,
        height: 60,
        width: (Dimensions.get('window').width * 0.8),
        borderRadius: 20,
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
