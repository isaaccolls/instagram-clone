import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';

const RutasNoAutenticadas = createStackNavigator(
    {
      SignIn: {
        screen: SignIn,
        // navigationOptions: {
            // header: null,
            // title: 'SignIn titulo desde screen',
        // },
      },
      SignUp: {
        screen: SignUp,
        // navigationOptions: {
        //     title: 'SignUp titulo desde screen',
        // },
      },
    },
    {
        headerMode: 'none',
        // navigationOptions: {
        //     title: 'Titulo desde el StackNavigator',
        // },
    },
);

export default createAppContainer(RutasNoAutenticadas); 