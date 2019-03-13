import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Publicacion extends Component {
    render() {
        // console.log(this.props.navigation);
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Publicacion</Text>
                <Button
                    title='Comentarios'
                    onPress={() => {
                        navigation.navigate('Comentarios')
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

export default Publicacion;