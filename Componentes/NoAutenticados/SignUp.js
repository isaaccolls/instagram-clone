import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class SignUp extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>SignUp</Text>
                <Button
                    title="SignIn"
                    onPress={() =>
                        navigation.goBack()
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
        alignItems: 'center',
        backgroundColor: '#902e9b',
    },
});

export default SignUp;