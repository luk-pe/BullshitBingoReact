import React from 'react';
import {KeyboardAvoidingView, StyleSheet, TextInput, Text, View, Button, ScrollView, Alert} from 'react-native';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Actions from "../redux/actions";
import {generateUUID} from "../utils/UUIDGenerator";

class NewTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: generateUUID(),
            name: '',
            items: [],
            description: '',
            creator: this.props.user.displayName || this.props.user.email,
            private: true
        };
    }

    _onChange = (text, position) => {
        let temp = this.state.items;
        temp[position] = text;
        this.setState({items: temp});
    };

    _onSave = () => {
        let emptyFields = false;
        if (this.state.name == null) {
            emptyFields = true;
        } else if (this.state.items.length < 16) {
            emptyFields = true;
        } else {
            for (i = 0; i < 16; i++) {
                if (this.state.items[i] == null || this.state.items[i].trim() == '') {
                    emptyFields = true;
                }
            }
        }
        if (emptyFields) {
            Alert.alert(
                'Empty Fields',
                'Please fill all the fields to save the template'
            );
        } else {
            this.props.addNewTemplate(this.state);
            this.props.navigation.navigate('MyTemplate', {template: this.state})
        }
    };

    _renderTextInputs = () => {
        let inputs = [];
        for (let i = 0; i < 16; i++) {
            inputs.push(
                <TextInput
                    key={i}
                    style={styles.input}
                    onChangeText={(text) => this._onChange(text, i)}
                    value={this.state.item}
                    placeholder={'Item ' + (i + 1)}
                    placeholderTextColor={'#A9A9A9'}
                />
            );
        }

        return (inputs);
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={80} enabled>
                <ScrollView>
                    <View style={styles.content}>
                        <Text style={styles.text}>Templates</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => this.setState({name: text})}
                            value={this.state.title}
                            placeholder={'Templates'}
                            placeholderTextColor={'#A9A9A9'}
                        />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text}>Items</Text>
                        {this._renderTextInputs()}
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text}>Description</Text>
                        <TextInput
                            style={styles.input}
                            multiline={true}
                            onChangeText={(text) => this.setState({description: text})}
                            value={this.state.description}
                            placeholder={'Description (optional)'}
                            placeholderTextColor={'#A9A9A9'}
                        />
                        <Button
                            title="Save Template"
                            onPress={() => this._onSave()}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            backgroundColor: '#EDEDED',
            flex: 1,
        },
        content: {
            backgroundColor: 'white',
            padding: 5,
            marginHorizontal: 6,
            marginVertical: 3,
        },
        input: {
            borderWidth: 1,
            borderColor: '#EDEDED',
            borderRadius: 5,
            padding: 5,
            margin: 5,
        },
        text: {
            margin: 5,
            fontSize: 20,
        }
    }
);

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addNewTemplate: Actions.addNewTemplate
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTemplate);