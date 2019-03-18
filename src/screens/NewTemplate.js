import React from 'react';
import {StyleSheet, TextInput, Text, View, Button, ScrollView, Alert} from 'react-native';

class NewTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            template: '',
            items: []
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.text}>Templates</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({template: text})}
                        value={this.state.template}
                        placeholder={'Templates'}
                        placeholderTextColor={'#A9A9A9'}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>Items</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onChange(text,0)}
                        value={this.state.item}
                        placeholder={'Item 1'}
                        placeholderTextColor={'#A9A9A9'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onChange(text,1)}
                        value={this.state.item}
                        placeholder={'Item 2'}
                        placeholderTextColor={'#A9A9A9'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onChange(text,2)}
                        value={this.state.item}
                        placeholder={'Item 3'}
                        placeholderTextColor={'#A9A9A9'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onChange(text,3)}
                        value={this.state.item}
                        placeholder={'Item 4'}
                        placeholderTextColor={'#A9A9A9'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onChange(text,4)}
                        value={this.state.item}
                        placeholder={'Item 5'}
                        placeholderTextColor={'#A9A9A9'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onChange(text,5)}
                        value={this.state.item}
                        placeholder={'Item 6'}
                        placeholderTextColor={'#A9A9A9'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onChange(text,6)}
                        value={this.state.item}
                        placeholder={'Item 7'}
                        placeholderTextColor={'#A9A9A9'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onChange(text,7)}
                        value={this.state.item}
                        placeholder={'Item 8'}
                        placeholderTextColor={'#A9A9A9'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onChange(text,8)}
                        value={this.state.item}
                        placeholder={'Item 9'}
                        placeholderTextColor={'#A9A9A9'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onChange(text,9)}
                        value={this.state.item}
                        placeholder={'Item 10'}
                        placeholderTextColor={'#A9A9A9'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onChange(text,10)}
                        value={this.state.item}
                        placeholder={'Item 11'}
                        placeholderTextColor={'#A9A9A9'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onChange(text,11)}
                        value={this.state.item}
                        placeholder={'Item 12'}
                        placeholderTextColor={'#A9A9A9'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onChange(text,12)}
                        value={this.state.item}
                        placeholder={'Item 13'}
                        placeholderTextColor={'#A9A9A9'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onChange(text,13)}
                        value={this.state.item}
                        placeholder={'Item 14'}
                        placeholderTextColor={'#A9A9A9'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onChange(text,14)}
                        value={this.state.item}
                        placeholder={'Item 15'}
                        placeholderTextColor={'#A9A9A9'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onChange(text,15)}
                        value={this.state.item}
                        placeholder={'Item 16'}
                        placeholderTextColor={'#A9A9A9'}
                    />
                    <Button
                        title="Save Template"
                        onPress={() => this.onSave()}
                    />
                </View>
                </ScrollView>
            </View>
        );
    }
    onChange = (text, position) => {
        let temp = this.state.items;
        temp[position] = text;
        this.setState({items: temp});
        console.log(this.state);
    };
    onSave = () => {
        let emptyFields = false;
        if(this.state.template == null){
            emptyFields = true;
        } else if (this.state.items.length < 16){
            emptyFields = true;
        } else {
            // TODO: trim to catch fields with blank space
            for (i = 0; i < 16; i++){
                if(this.state.items[i] == null || this.state.items[i] == ''){
                    emptyFields = true;
                }
            }
        }
        if (emptyFields){
            Alert.alert(
                'Empty Fields',
                'Please fill all the fields to save the template',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
            );
        }
    };
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

export default NewTemplate;