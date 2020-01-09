import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { actionDescargarPublicaciones } from '../../Store/ACCIONES';

class Home extends Component {

    componentDidMount() {
        console.log("componentDidMount");
        this.props.descargarPublicaciones();
    }

    render() {
        // console.log(this.props.navigation);
        const { navigation } = this.props;
        console.log("😃 publicaciones: ", this.props.publicaciones);
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
        backgroundColor: '#f9f9f9',
    },
});

const mapStateToProps = (state) => ({
    publicaciones: state.reducerPublicacionesDescargadas,
});

const mapDispatchToProps = (dispatch) => ({
    descargarPublicaciones: () => {
        dispatch(actionDescargarPublicaciones());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);