import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { autenticacion } from '../../../Store/Servicios/Firebase';

const fieldNombre = (props) => {
    // console.log(props); //props.input.onChange <= es la q inyecta fields, no del TextInput
    console.log("inputs");
    return (
        <View style={styles.textInput}>
            <TextInput
                placeholder={props.ph}
                onChangeText={props.input.onChange}
                value={props.input.value}
                keyboardType={props.input.name === 'correo' ? 'email-address' : 'default'}
                autoCapitalize='none'
                secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmacion')}
                onBlur={props.input.onBlur}
            />
            <View style={styles.linea} />
            { props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
        </View>
    );
};

const validate = (values) => {
    const errors = {};
    if (!values.nombre) {
        errors.nombre = 'requerido';
    } else if (values.nombre.length < 5) {
        errors.nombre = 'deben ser al menos 5 caracteres';
    } else if (values.nombre.length > 10) {
        errors.nombre = 'debe ser menor de 10 caracteres';
    }

    if (!values.correo) {
        errors.correo = 'requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
        errors.correo = 'correo invalido';
    }

    if (!values.password) {
        errors.password = 'requerido';
    } else if (values.password.length < 5) {
        errors.password = 'deben ser al menos 5 caracteres';
    } else if (values.password.length > 15) {
        errors.password = 'deben ser menos de 15 caracteres';
    }

    if (!values.confirmacion) {
        errors.confirmacion = 'requerido';
    } else if (values.password !== values.confirmacion) {
        errors.confirmacion = 'el password debe coincidir';
    }

    return errors;
};

const SignUpForm = (props) => {
    // console.log(props);
    console.log("SignUpForm");
    return(
        <View>
            <Field
                name="nombre"
                component={fieldNombre}
                ph="nombre"
            />
            <Field
                name="correo"
                component={fieldNombre}
                ph="correo@correo.com"
            />
            <Field
                name="password"
                component={fieldNombre}
                ph="*******"
            />
            <Field
                name="confirmacion"
                component={fieldNombre}
                ph="*******"
            />
            <Button
                title="Registrar"
                onPress={props.handleSubmit((values) => {
                    console.log(values)
                    autenticacion
                    .createUserWithEmailAndPassword(values.correo, values.password)
                    .then((success) => {
                        console.log(success)
                    })
                    .catch((error) => {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorCode)
                        console.log(errorMessage)
                        // ...
                    });
                })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 16,
    },
    linea: {
        backgroundColor: '#DCDCDC',
        height: 2,
    },
    errors: {
        color: '#FF0000',
    }
});

export default reduxForm({
    form: 'SignUpForm',
    validate
})(SignUpForm);