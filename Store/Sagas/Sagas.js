// takeEvery: escucha cada dispatch del store y ejecuta una funcion si encuentra el dispatch
// call: ejecuta una funcion
import { takeEvery, call, select } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';
import CONSTANTES from '../CONSTANTES';

const registroEnFirebase = values =>
    autenticacion
        .createUserWithEmailAndPassword(values.correo, values.password)
        .then(success => success.user.toJSON());
        // .then(success => JSON.stringify(success));

const registroEnBaseDeDatos = ({ uid, email, nombre, fotoURL }) => {
    // console.log("registroEnBaseDeDatos 👽");
    // console.log(uid, email, nombre);Expo ImagePicker
    return baseDeDatos.ref(`usuarios/${uid}`).set({
        nombre,
        email,
        fotoURL,
    });
}

const registroFotoCloudinary = ({ imagen }) => {
    // console.log("imagen 👾\n", imagen);
    const { uri, type } = imagen;
    const splitName = uri.split('/');
    const name = [...splitName].pop();
    const foto = {
        uri,
        type: "image/jpeg", // fix this vaina
        name,
    };

    const formImagen = new FormData();
    formImagen.append('upload_preset', CONSTANTES.CLOUDINARY_PRESET);
    formImagen.append('file', foto);

    return fetch(CONSTANTES.CLOUDINARY_NAME, {
        method: 'POST',
        body: formImagen,
    }).then(response => response.json());
}

function* sagaRegistro(values) {
    // console.log(values);
    try {
        // cargar foto
        const imagen = yield select(state => state.reducerImagenSignUp);
        // console.log(imagen);
        const urlFoto = yield call(registroFotoCloudinary, imagen);
        console.log(urlFoto);
        console.log(urlFoto.secure_url);
        const fotoURL = urlFoto.secure_url;
        //
        
        const registro = yield call(registroEnFirebase, values.datos);
        // console.log("respuesta 👽");
        // console.log(registro);
        // console.log(values);
        const { email, uid } = registro;
        const { datos: { nombre } } = values;
        // uid, email, nombre
        yield call(registroEnBaseDeDatos, { uid, email, nombre, fotoURL });
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

const escribirFirebase = ({ width, height, secure_url, uid }, texto = '') => baseDeDatos.ref('publicaciones/').push({
    width,
    height,
    secure_url,
    uid,
    texto,
}).then(response => response);

const escribirAutorPublicaciones = ({ uid, key }) => baseDeDatos
    .ref(`autor-publicaciones/${uid}`)
    .update({ [key]: true })
    .then(response => response);

function* sagaSubirPublicacion({ values }) {
    try {
        console.log("👽!", values);
        const imagen = yield select(state => state.reducerImagenPublicacion);
        // console.log(imagen);
        const resultadoImagen = yield call(registroFotoCloudinary, imagen);
        console.log(resultadoImagen);
        const { width, height, secure_url } = resultadoImagen;
        const usuario = yield select(state => state.reducerSesion);
        const { uid } = usuario;
        console.log("usuario 👉", uid);
        const parametrosImagen = { width, height, secure_url, uid };
        const escribirEnFirebase = yield call(escribirFirebase, parametrosImagen, values.texto);
        console.log(escribirEnFirebase);
        // console.log("key: ", escribirEnFirebase.key);
        const { key } = escribirEnFirebase;
        const parametrosAutorPublicaciones = { uid, key };
        const resultadoEscribirAutorPublicaciones = yield call(escribirAutorPublicaciones, parametrosAutorPublicaciones);
        console.log("resultadoEscribirAutorPublicaciones: ", resultadoEscribirAutorPublicaciones);
    } catch (error) {
        console.log("🙃", error);
    }
}

const descargarPublicaciones = () => baseDeDatos
    .ref('publicaciones/')
    .once('value')
    .then(response => response.val());

function* sagaDescargarPublicaciones() {
    try {
        const publicaciones = yield call(descargarPublicaciones);
        console.log("👽", publicaciones);
    } catch (error) {
        console.log("🙃", error);
    }
}

export default function* funcionPrimaria() {
    // takeEvery es un Listener
    yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro);
    // yield ES6 permite pausar ejecucion de la funcion en yield y regresar un valor.
    yield takeEvery(CONSTANTES.LOGIN, sagaLogin);
    yield takeEvery(CONSTANTES.SUBIR_PUBLICACION, sagaSubirPublicacion);
    yield takeEvery(CONSTANTES.DESCARGAR_PUBLICACIONES, sagaDescargarPublicaciones);
    console.log('Desde nuestra funcion generadora');
}
