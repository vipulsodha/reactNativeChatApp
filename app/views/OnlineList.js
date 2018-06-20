/**
 * Created by vipulsodha on 20/06/18.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image
} from 'react-native';


import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
type Props = {};

export default class OnlineList extends Component<Props> {

    state = {
        users: []
    };


    async componentDidMount() {
        console.log("Did mount");


        const data = await axios.get("https://jsonplaceholder.typicode.com/users").catch((e) => {
            console.log(e);
        });

        const users = data.data;

        this.setState({
            users
        });
    }


    renderItem = ({item}) => {

        return (
            <View key={item.id} style={styles.userSection}>
                <View  style={{justifyContent:"center", padding:5}}>
                    <Image
                        style={{width: 50, height: 50}}
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                    />
                </View>
                <View  style={{justifyContent:"center", padding:5}}>
                    <Text>{item.name}</Text>
                    <Text>{item.email}</Text>
                </View>
                <View  style={{justifyContent:"center", padding:5}}>
                    <Icon name="keyboard-arrow-right" size={20}/>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.users}
                    renderItem={this.renderItem}

                />

                </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userSection: {
        flex:1,
        flexDirection: 'row',
        padding:5
    },


})
