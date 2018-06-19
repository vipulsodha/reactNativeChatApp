/**
 * Created by vipulsodha on 20/06/18.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

type Props = {};

export default class PersonalChats extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Text>Personal Chats</Text>
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

})
