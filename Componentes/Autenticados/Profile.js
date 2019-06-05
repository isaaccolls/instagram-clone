import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { autenticacion } from '../../Store/Servicios/Firebase';

class Profile extends Component {
    render() {
        // console.log(this.props.navigation);
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
                <Button
                    title='Publicacion'
                    onPress={() => {
                        navigation.navigate('Publicacion')
                    }}
                />
                <Button
                    title='Salir'
                    onPress={() => {autenticacion.signOut()}}
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

export default Profile;