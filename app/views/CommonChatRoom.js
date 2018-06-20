import React from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    FlatList,
    TouchableOpacity
} from 'react-native';

function ReceivedMessage({message}) {

    return (
        <View style={styles.receivedMessage} >
            <Text>{message}</Text>
        </View>
    )
}

function SentMessage({message}) {
    return (
        <View style={styles.sentMessage}>
            <Text>{message}</Text>
        </View>
    )
}

export default class CommonChatRoom extends React.Component {
    state = {
        inputValue: '',
        messages :[{message: "hello", sent: false}, {message:"hi", sent: false}]
    };

    onChangeInput = text => {
        this.setState({ inputValue: text });
    };

    renderItem = ({item}) => {
        if (item.sent) {
            return (<SentMessage message={item.message} />)
        } else {
            return (<ReceivedMessage message={item.message} />)
        }
    };

    sendMessage = (e) => {

        if (this.state.inputValue === '') {
            return;
        }

        this.setState((state) => ({
            messages: [...state.messages, {sent: true, message: this.state.inputValue}],
            inputValue:""
        }))
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.messages}
                    renderItem={this.renderItem}

                />
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={64}>
                    <View style={styles.footer}>
                        <TextInput
                            style={styles.inputBox}
                            value={this.state.inputValue}
                            onChangeText={this.onChangeInput}
                            underlineColorAndroid="transparent"
                        />
                        <TouchableOpacity style={styles.sendButton} onPress={this.sendMessage}>
                            <Text>Send</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputBox: {
        fontSize: 20,
        padding:5,
        flex:1,
        backgroundColor:"#bdc3c7",


    },
    container: {
        flex: 1,
    },
    footer: {
        flexDirection: 'row',
    },
    message: {
        flexDirection: 'row',
        backgroundColor:"#e67e22",
        padding:5,
        margin:5,

    },
    sendButton : {
        padding:5,
        backgroundColor:"#2ecc71",
        borderRadius:5
    },
    sentMessage: {
        flexDirection: 'row-reverse',
        backgroundColor:"#e67e22",
        padding:10,
        margin:5,
        borderRadius: 5,
        maxWidth:300,
        minWidth:100,
        alignSelf:'flex-end'

    },
    receivedMessage: {
        flexDirection: 'row',
        backgroundColor:"#f1c40f",
        padding:10,
        margin:5,
        borderRadius: 5,
        maxWidth:300,
        minWidth:100,
        alignSelf:'flex-start'
    }
});
