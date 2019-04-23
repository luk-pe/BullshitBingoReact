import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, FlatList
} from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import DialogInput from 'react-native-dialog-input';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions';

import * as firebase from 'firebase';
import 'firebase/auth';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAddSubscriberAlertOpen: false,
            isEditUsernameAlertOpen: false
        };
    }

    componentDidMount() {
        this.props.getSubscribesTo();
    }

    _addSubscriber = (mail) => {
        this.props.subscribeToUser(mail).then(() => {
            this.setState({isAddSubscriberAlertOpen:false})
        }).catch((errorMessage) => {
            alert(errorMessage);
        });
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
            'Do you really want to log out? Your local games will be deleted!',
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
                    <View style={styles.listHeader}>
                        <Text>I subscribe to</Text>
                        <TouchableOpacity onPress={() => this.setState({isAddSubscriberAlertOpen: true})}>
                            <Text style={{color:'blue',fontSize:25}}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={this.props.subscribes_to}
                        keyExtractor={(item) => item.email}
                        renderItem={({item}) => {
                            return (
                                <View style={styles.userRow}>
                                    <Text style={styles.templateName}>{item.email}</Text>
                                </View>
                            );
                        }}
                    />
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
                <DialogInput isDialogVisible={this.state.isAddSubscriberAlertOpen}
                             title={"Subscribe"}
                             message={"Please enter the mail address of the friend you want to subscribe to!"}
                             hintInput={"yourfriend@mail.com"}
                             submitInput={(inputText) => {
                                 this._addSubscriber(inputText)
                             }}
                             closeDialog={() => {
                                 this.setState({isAddSubscriberAlertOpen: false})
                             }}>
                </DialogInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "#fff",
        flex: 0.4
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
    },
    actionBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    avatar: {
        width: 75,
        height: 75,
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
        backgroundColor: '#EDEDED',
        flex: 0.6
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
    },
    listHeader: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:10
    },
    userRow: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        margin: 5,
        padding: 10,
    },
    templateName: {
        fontSize: 18,
    },
    templateCreator: {
        fontSize: 12,
    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSubscribesTo: Actions.getSubscribesTo,
        logoutUser: Actions.logoutUser,
        updateUsername: Actions.updateUsername,
        subscribeToUser: Actions.subscribeToUser
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        subscribes_to: state.userReducer.subscribes_to,
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);