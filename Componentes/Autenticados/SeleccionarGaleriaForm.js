import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = (props) => {
    // console.log(props); //props.input.onChange <= es la q inyecta fields, no del TextInput
    // console.log("inputs");
    return (
        <View style={styles.textInput}>
            <TextInput
                placeholder={props.ph}
                onChangeText={props.input.onChange}
                value={props.input.value}
                keyboardType="default"
                autoCapitalize='none'
                onBlur={props.input.onBlur}
                multiline
            />
            <View />
            { props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
        </View>
    );
};

const fieldImagen = props => (
    <View>
        <View>
            { props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
        </View>
    </View>
);

const validate = (values, props) => {
    console.log("Ejecutando validacion");
    const errors = {};

    if (!props.imagen) {
        errors.imagen = 'imagen es requerida';
    }
    if (values.texto && values.texto.length > 140) {
        errors.texto = 'debe ser menor de 140 caracteres';
    }
    return errors;
};

const SelecionarGaleriaForm = (props) => {
    // console.log(props);
    // console.log("SelecionarGaleriaForm");
    return(
        <View style={styles.container}>
            <Field
                name='imagen'
                component={fieldImagen}
            />
            <Field
                name="texto"
                component={fieldNombre}
                ph="Texto de la imagen"
            />
            <Button
                title="Registrar"
                onPress={props.handleSubmit(props.registro)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
    },
    textInput: {
        marginHorizontal: 16,
    },
    errors: {
        color: '#FF0000',
    }
});

export default reduxForm({
    form: 'SelecionarGaleriaForm',
    validate
})(SelecionarGaleriaForm);