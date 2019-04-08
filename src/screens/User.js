import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import DialogInput from 'react-native-dialog-input';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditUsernameAlertOpen: false
        }
    }

    _editUsername = (name) => {
        this.props.updateUsername(name)
            .catch(() => {
                alert("Error while editing username! Try again...");
            })
            .finally(() => {
                this.setState({isEditUsernameAlertOpen: false});
            });
    };

    _logoutUser = () => {
        Alert.alert(
            'Logout',
            'Do you really want to log out?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () => {
                        this.props.logoutUser().catch(() => alert("Logout failed."));
                    }
                },
            ],
            {cancelable: false},
        );
    };

    render() {
        const {user} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Image style={styles.avatar}
                               source={require('../../assets/user.png')}/>
                        <Text style={styles.name}>{user.displayName}</Text>
                        <Text style={styles.userInfo}>{user.email}</Text>
                        <View style={styles.actionBar}>
                            <TouchableOpacity onPress={() => this.setState({isEditUsernameAlertOpen: true})}>
                                <AntIcon name="edit" size={24} color="orange"/>
                            </TouchableOpacity>
                            <Text>{'     '}</Text>
                            <TouchableOpacity onPress={this._logoutUser}>
                                <AntIcon name="logout" size={24} color="red"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.item}>
                        <View style={styles.infoContent}>
                            <Text style={styles.info}>LOGOUT</Text>
                        </View>
                    </View>
                </View>
                <DialogInput isDialogVisible={this.state.isEditUsernameAlertOpen}
                             title={"Edit Username"}
                             message={"Please enter your new username"}
                             hintInput={"Username"}
                             submitInput={(inputText) => {
                                 this._editUsername(inputText)
                             }}
                             closeDialog={() => {
                                 this.setState({isEditUsernameAlertOpen: false})
                             }}>
                </DialogInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#DCDCDC",
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
    },
    actionBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        color: "#000000",
        fontWeight: '600',
    },
    userInfo: {
        fontSize: 16,
        color: "#778899",
        fontWeight: '600',
    },
    body: {
        backgroundColor: "#fff",
        height: 500,
        alignItems: 'center',
    },
    item: {
        flexDirection: 'row',
    },
    infoContent: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: 5
    },
    info: {
        fontSize: 18,
        marginTop: 20,
        color: "#000",
    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logoutUser: Actions.logoutUser,
        updateUsername: Actions.updateUsername
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);