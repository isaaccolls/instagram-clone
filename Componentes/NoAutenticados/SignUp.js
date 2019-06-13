import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { blur, change } from 'redux-form';
import SignUpForm from './Formas/SignUpForm';
import { actionRegistro, actionCargarImagenSignUp, actionLimpiarImagenSignUp } from '../../Store/ACCIONES';
import SeleccionarImagen from '../SeleccionarImagen';
import CONSTANTES from '../../Store/CONSTANTES';

class SignUp extends Component {

    componentWillUnmount() {
        this.props.limpiarImagen();
    }

    registroDeUsuario = (values) => {
        // console.log(values);
        this.props.registro(values);
    }
    render() {
        // console.log(this.props.numero);
        const { navigation } = this.props;
        // console.log(this.props);
        return (
            <View style={styles.container}>
                <SeleccionarImagen imagen={this.props.imagen.imagen} cargar={this.props.cargarImagen} />
                <SignUpForm registro={this.registroDeUsuario} imagen={this.props.imagen.imagen} />
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
        // alignItems: 'center',
        backgroundColor: '#90EE90',
        paddingHorizontal: 16,
    },
});

const mapStateToProps = (state, ownProps) => {
    return {
        numero: state.reducerPrueba,
        imagen: state.reducerImagenSignUp,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        registro: (values) => {
            // dispatch({ type: 'REGISTRO', datos: values });
            // implementing a action creator
            dispatch(actionRegistro(values));
        },
        cargarImagen: (imagen) => {
            // dispatch({ type: CONSTANTES.CARGAR_IMAGEN_SIGNUP, imagen });
            dispatch(actionCargarImagenSignUp(imagen));
            dispatch(blur('SignUpForm', 'imagen', Date.now()));
        },
        limpiarImagen: () => {
            // dispatch({ type: CONSTANTES.LIMPIAR_IMAGEN_SIGNUP });
            dispatch(actionLimpiarImagenSignUp());
        },
    }
}

// export default SignUp;
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);