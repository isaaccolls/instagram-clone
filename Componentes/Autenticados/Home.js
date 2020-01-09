import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image, Dimensions } from 'react-native';
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
                <FlatList
                    data = {this.props.publicaciones}
                    renderItem = {({ item }) => {
                        // <Text>{item.key}</Text>
                        const { width } = Dimensions.get('window');
                        // console.log("device width: ", width);
                        const factor = item.width / width;
                        const height = item.height / factor;
                        return <Image source={{uri: item.secure_url}} style={{ width, height }} />
                    }}
                />
                {/*
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