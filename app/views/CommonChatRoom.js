/**
 * Created by vipulsodha on 20/06/18.
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

type Props = {};

export default class CommonChatRoom extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Text>Chat Room</Text>
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
        marginRight:40,
        marginLeft:40,
        padding:10,
        alignItems:'center',
        backgroundColor:"purple",
        borderRadius: 5
    }
})
