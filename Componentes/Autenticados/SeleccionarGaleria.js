import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SeleccionarImagen from '../SeleccionarImagen';
import { actionCargarImagenPublicacion } from '../../Store/ACCIONES';

class SeleccionarGaleria extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imagen}>
            <SeleccionarImagen imagen={this.props.imagen.imagen} cargar={this.props.cargarImagen} />
        </View>
        <View style={styles.texto}>
            <Text>SeleccionarGaleria</Text>
        </View>
        <View style={styles.boton}>
            <Button
                title="Publicar"
                onPress={() => {
                    console.log("elemento publicado👌");
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
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    imagen: {
        flex: 2,
    },
    texto: {
        flex: 2,
    },
    boton: {
        flex: 1,
    }
});

const mapStateToProps = state => {
    return {
        imagen: state.reducerImagenPublicacion,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cargarImagen: (imagen) => {
            dispatch(actionCargarImagenPublicacion(imagen))
        }
    }
}

// export default SeleccionarGaleria;
export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria);
