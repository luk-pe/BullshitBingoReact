import React from 'react';
import {Dimensions,StyleSheet, View, Text, TextInput, TouchableOpacity} from "react-native";
import 'firebase/auth';

// Redux import
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions';


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isForgotPasswordAlertOpen: false,
            isLoading: false,
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

    _register = () => {
        this.setState({isLoading: true});
        const {mail,password} = this.state;
        this.props.createUser(mail,password).catch((error) => {
            alert(error.message);
            this.setState({isLoading: false});
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewTop}>
                    <Text style={{fontSize:40}}>REGISTER</Text>
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
                               secureTextEntry = {true}
                               onChangeText={this._onChangePassword}
                    />
                </View>
                <View style={styles.viewBottom}>
                    <TouchableOpacity
                        disabled={this.state.isLoading}
                        style = {styles.loginButton}
                        onPress = {() => this._register()}>
                        <Text style = {styles.loginButtonText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        disabled={this.state.isLoading}
                        style = {styles.loginButton}
                        onPress = {() => this.props.goBack()}>
                        <Text style = {styles.loginButtonText}>Go back</Text>
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
        createUser: Actions.createUser
    }, dispatch);
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
