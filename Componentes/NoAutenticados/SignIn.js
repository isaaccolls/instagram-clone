import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SignInForm from './Formas/SignInForm';

class SignIn extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <SignInForm />
                <Button
                    title="SignUp"
                    onPress={() =>
                        navigation.navigate('SignUp')
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#90EE90',
        paddingHorizontal: 16,
    },
});

export default SignIn;