import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Add extends Component {
    render() {
        console.log(this.props);
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Button
                    title='Seleccionar galeria'
                    onPress={ () => {
                        navigation.navigate('Seleccion')
                    }}
                ></Button>
                <Text>Add</Text>
                <Button
                    title='Tomar foto'
                    onPress={ () => {
                        navigation.navigate('Seleccion')
                    }}
                ></Button>
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

export default Add;