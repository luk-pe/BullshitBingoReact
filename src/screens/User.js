import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions';

class User extends Component {

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
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.item}>
                        <View style={styles.infoContent}>
                            <Text style={styles.info}>LOGOUT</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#DCDCDC",
    },
    headerContent:{
        padding:30,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
    },
    name:{
        fontSize:22,
        color:"#000000",
        fontWeight:'600',
    },
    userInfo:{
        fontSize:16,
        color:"#778899",
        fontWeight:'600',
    },
    body:{
        backgroundColor: "#fff",
        height:500,
        alignItems:'center',
    },
    item:{
        flexDirection : 'row',
    },
    infoContent:{
        flex:1,
        alignItems:'center',
        paddingLeft:5
    },
    info:{
        fontSize:18,
        marginTop:20,
        color: "#000",
    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);