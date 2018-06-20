/**
 * Created by vipulsodha on 20/06/18.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';


import  {StackActions, NavigationActions} from 'react-navigation';


const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'ChatArea' })],
});

type Props = {};


function SubmitButton({onPress}) {
    return (
        <TouchableOpacity onPress = {onPress} style={styles.submitBtn}>
            <Text>Submit</Text>
        </TouchableOpacity>
    )
}

export default class MainScreen extends Component<Props> {

    state = {
        nameValue: ""
    }

    onSubmit = (e) => {
        // this.props.navigation.dispatch(resetAction);

        if (this.state.nameValue === "") {
            return;
        }

        this.props.navigation.navigate("CommonChatRoom");

    }

    handleTextChange = (nameValue) => {


        this.setState((prevState) => ({
           nameValue
        }));
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput multiline={true} style={styles.inputBox} value={this.state.nameValue}  onChangeText={this.handleTextChange} placeholder="Enter Name"/>
                <SubmitButton onPress = {this.onSubmit}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: 200,
        height:30,
        borderWidth: 2,
        borderColor:"black",
        padding: 5
    },
    submitBtn: {

        marginTop:20,
        padding:10,
        alignItems:'center',
        backgroundColor:"purple",
        borderRadius: 5
    }
})
