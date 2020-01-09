import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { blur } from 'redux-form';
import SeleccionarImagen from '../SeleccionarImagen';
import { actionCargarImagenPublicacion, actionSubirPublicacion, actionLimpiarImagenPublicacion } from '../../Store/ACCIONES';
import SeleccionarGaleriaForm from './SeleccionarGaleriaForm';

class SeleccionarGaleria extends Component {
// static navigationOptions = {
//     tabBarVisible: false,
// }; not working! it's on StackAdd.js

    componentWillUnmount() {
        this.props.limpiarImagen();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.estadoSubirPublicacion !== nextProps.estadoSubirPublicacion) {
            switch (nextProps.estadoSubirPublicacion) {
                case 'EXITO':
                    console.log("exito 😁");
                    this.props.navigation.goBack();
                    break;
                case 'ERROR':
                    console.log("error 🙃");
                    break;
                default:
                    break;
            }
        }
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imagen}>
            <SeleccionarImagen
                imagen={this.props.imagen.imagen}
                cargar={this.props.cargarImagen}
                radius={true} />
        </View>
        <View style={styles.texto}>
            <SeleccionarGaleriaForm
                imagen={this.props.imagen.imagen}
                registro={(values) => {
                    // console.log("👽", values)
                    this.props.subirPublicacion(values);
                }}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    imagen: {
        flex: 2,
    },
    texto: {
        flex: 2,
    },
});

const mapStateToProps = state => {
    return {
        imagen: state.reducerImagenPublicacion,
        estadoSubirPublicacion: state.reducerExitoSubirPublicacion.estado,
    }
}

const mapDispatchToProps = dispatch => ({
    cargarImagen: (imagen) => {
        dispatch(actionCargarImagenPublicacion(imagen));
        dispatch(blur('SelecionarGaleriaForm', 'imagen', Date.now()));
    },
    subirPublicacion: (values) => {
        dispatch(actionSubirPublicacion(values));
    },
    limpiarImagen: () => {
        dispatch(actionLimpiarImagenPublicacion());
    },
});

// export default SeleccionarGaleria;
export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria);
