import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Publicacion extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Publicacion</Text>
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

export default Publicacion;