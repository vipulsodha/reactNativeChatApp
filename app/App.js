/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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

import Icon from 'react-native-vector-icons/MaterialIcons';
import  {StackActions, NavigationActions, StackNavigator, TabNavigator} from 'react-navigation';


import MainScreen from './views/MainScreen'
import  CommonChatRoom from './views/CommonChatRoom'
import  PersonalChats from './views/PersonalChats'


const ChatArea = TabNavigator({

  CommonChatRoom: {
    screen: CommonChatRoom,
    navigationOptions: {
      tabBarLabel: 'Common Room',
      tabBarIcon: () => <Icon name="chat" size={30}/>
    }
  },
  PersonalChats: {
    screen:PersonalChats,
    navigationOptions: {
      tabBarLabel: 'Personal Chats',
      tabBarIcon: () => <Icon name="chat-bubble-outline" size={30}/>
    }
  }

});


const Stack = StackNavigator({
  MainScreen: {
    screen:MainScreen,
    navigationOptions: {
      title: "Open Chat"
    }
  },
  ChatArea: {
    screen: ChatArea
  }
});

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'CommonChatRoom' })],
});

type Props = {};

export default class App extends Component<Props> {

  render() {
    return (
        <Stack/>
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
