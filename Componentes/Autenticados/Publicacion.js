import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, Image } from 'react-native';

class Publicacion extends Component {
    render() {
        // console.log(this.props.navigation);
        const { navigation, item } = this.props;
        const { width } = Dimensions.get('window');
        // console.log("device width: ", width);
        const factor = item.width / width;
        const height = item.height / factor;
        return (
            <View>
                <Image source={{uri: item.secure_url}} style={{ width, height }} />
                {/*
                <Text>Publicacion</Text>
                <Button
                    title='Comentarios'
                    onPress={() => {
                        navigation.navigate('Comentarios')
                    }}
                />
                */}
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