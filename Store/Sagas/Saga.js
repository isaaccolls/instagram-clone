// takeEvery: escucha cada dispatch del store y ejecuta una funcion si encuentra el dispatch
// call: ejecuta una funcion
import { takeEvery, call } from 'redux-saga/effects';
import { autenticacion } from '../Servicios/Firebase';

const registroEnFirebase = (values) => autenticacion
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

function* generadoraRegistro(values) {
    yield call(registroEnFirebase, values.datos);
    console.log(values);
}

export default function* funcionPrimaria() {
    // takeEvery es un Listener
    yield takeEvery('REGISTRO', generadoraRegistro)
    // yield ES6 permite pausar ejecucion de la funcion en yield y regresar un valor.
    console.log('Desde nuestra funcion generadora');
}
