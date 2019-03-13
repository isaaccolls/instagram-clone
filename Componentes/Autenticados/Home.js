import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Home extends Component {
    render() {
        // console.log(this.props.navigation);
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <Button
                    title='autor'
                    onPress={() => {
                        navigation.navigate('Autor')
                    }}
                />
                <Button
                    title='Comentarios'
                    onPress={() => {
                        navigation.navigate('Comentarios');
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

export default Home;