// takeEvery: escucha cada dispatch del store y ejecuta una funcion si encuentra el dispatch
// call: ejecuta una funcion
import { takeEvery, call } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';

const registroEnFirebase = values =>
    autenticacion
        .createUserWithEmailAndPassword(values.correo, values.password)
        .then(success => success.user.toJSON());
        // .then(success => JSON.stringify(success));

const registroEnBaseDeDatos = ({ uid, email, nombre }) => {
    // console.log("registroEnBaseDeDatos 👽");
    // console.log(uid, email, nombre);
    return baseDeDatos.ref(`usuarios/${uid}`).set({
        nombre,
        email,
    });
}

function* sagaRegistro(values) {
    // console.log(values);
    try {
        const registro = yield call(registroEnFirebase, values.datos);
        // console.log("respuesta 👽");
        // console.log(registro);
        // console.log(values);
        const { email, uid } = registro;
        const { datos: { nombre } } = values;
        // uid, email, nombre
        yield call(registroEnBaseDeDatos, { uid, email, nombre });
    } catch (error) {
        console.log(error);
    }
}

const loginEnFirebase = ({correo, password}) =>
    autenticacion.signInWithEmailAndPassword(correo, password)
        .then((success) => success.user.toJSON());

function* sagaLogin(values) {
    try {
        console.log("sagaLogin");
        console.log(values);
        const resultado = yield call(loginEnFirebase, values.datos);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

export default function* funcionPrimaria() {
    // takeEvery es un Listener
    yield takeEvery('REGISTRO', sagaRegistro);
    // yield ES6 permite pausar ejecucion de la funcion en yield y regresar un valor.
    yield takeEvery('LOGIN', sagaLogin);
    console.log('Desde nuestra funcion generadora');
}
