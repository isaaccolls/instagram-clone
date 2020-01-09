import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, Image } from 'react-native';

class Publicacion extends Component {
    render() {
        // console.log(this.props.autor);
        // console.log(this.props.navigation);
        const { navigation, item, autor } = this.props;
        const { width } = Dimensions.get('window');
        // console.log("device width: ", width);
        const factor = item.width / width;
        const height = item.height / factor;
        return (
            <View>
                <View style={styles.header}>
                    <Image source={{uri: autor.fotoURL}} style={{width: 48, height: 48, borderRadius: 24}} />
                    <Text>{autor.nombre}</Text>
                </View>
                <Image source={{uri: item.secure_url}} style={{ width, height }} />
                <View>
                    <Text>Likes</Text>
                    <Text>Comentarios</Text>
                </View>
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
});

export default Publicacion;