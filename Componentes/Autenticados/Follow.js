import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Follow extends Component {
    render() {
        const { navigation } = this.props;
        // console.log(navigation);
        return (
            <View style={styles.container}>
                <Text>Follow</Text>
                <Button
                    title="Autor"
                    onPress={() => {
                        navigation.navigate('Autor');
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#902e9b',
    },
});

export default Follow;