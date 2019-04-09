import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = (props) => {
    console.log(props); //props.input.onChange <= es la q inyecta fields, no del TextInput
    return (
        <View>
            <TextInput
                placeholder={props.ph}
                onChangeText={props.input.onChange}
                value={props.input.value}
                keyboardType={props.input.name === 'correo' ? 'email-address' : 'default'}
                autoCapitalize='none'
                secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmacion')}
                onBlur={props.input.onBlur}
            />
            { props.meta.touched && props.meta.error && <Text>{props.meta.error}</Text>}
        </View>
    );
};

const validate = (values) => {
    const errors = {};

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

    return errors;
};

const SignInForm = (props) => {
    // console.log(props);
    return(
        <View>
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
            <Text>Redux Form</Text>
            <Button
                title="Sign In"
                onPress={props.handleSubmit((values) => {console.log(values)})}
            />
        </View>
    );
}

export default reduxForm({
    form: 'SignInForm',
    validate
})(SignInForm);