import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';

const SignIn = (props) => {
    console.log(props);
    return <Text>Componente SignIn</Text>;
}

const SignUp = () => <Text>Componente SignUp</Text>;

const RutasNoAutenticadas = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  }
});

export default createAppContainer(RutasNoAutenticadas);