import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { blur } from 'redux-form';
import SeleccionarImagen from '../SeleccionarImagen';
import { actionCargarImagenPublicacion } from '../../Store/ACCIONES';
import SeleccionarGaleriaForm from './SeleccionarGaleriaForm';

class SeleccionarGaleria extends Component {
// static navigationOptions = {
//     tabBarVisible: false,
// }; not working! it's on StackAdd.js
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
                    console.log("👽", values)
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cargarImagen: (imagen) => {
            dispatch(actionCargarImagenPublicacion(imagen));
            dispatch(blur('SelecionarGaleriaForm', 'imagen', Date.now()));
        }
    }
}

// export default SeleccionarGaleria;
export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria);
