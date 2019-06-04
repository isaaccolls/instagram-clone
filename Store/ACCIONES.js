import CONSTANTES from './CONSTANTES';

export const actionRegistro = values => ({
    type: CONSTANTES.REGISTRO,
    datos: values,
});

export const actionLogin = datos => ({
    type: CONSTANTES.LOGIN,
    datos
});