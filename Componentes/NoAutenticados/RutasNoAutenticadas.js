import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const SignIn = (props) => {
    // console.log(props);
    // props.navigation.navigate()
    const { navigation } = props;
    return (
        <View>
            <Text>Componente SignIn</Text>
            <Button
                title="Navegar a SignUp"
                onPress={() => {
                    navigation.navigate('SignUp');
                }}
            />
        </View>
    );
}

const SignUp = (props) => {
    const { navigation } = props;
    return (
        <View>
            <Text>Componente SignUp</Text>
            <Button
                title="Navegar a SignIn"
                onPress={() => {
                    // navigation.navigate('SignIn');
                    navigation.goBack();
                }}
            />
        </View>
    );
}

const RutasNoAutenticadas = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  }
});

export default createAppContainer(RutasNoAutenticadas);