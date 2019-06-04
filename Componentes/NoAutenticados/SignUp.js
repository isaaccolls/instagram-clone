import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SignUpForm';
import { actionRegistro } from '../../Store/ACCIONES';

class SignUp extends Component {
    registroDeUsuario = (values) => {
        // console.log(values);
        this.props.registro(values);
    }
    render() {
        // console.log(this.props.numero);
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <SignUpForm registro={this.registroDeUsuario} />
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
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        registro: (values) => {
            // dispatch({ type: 'REGISTRO', datos: values });
            // implementing a action creator
            dispatch(actionRegistro(values));
        },
    }
}

// export default SignUp;
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);