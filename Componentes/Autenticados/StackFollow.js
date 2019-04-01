import { createStackNavigator } from 'react-navigation';
import TabFollow from './TabFollow';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';

const StackFollow = createStackNavigator({
    TabFollow: {
        screen: TabFollow,
    },
    Autor: {
        screen: Autor,
    },
    Publicacion: {
        screen: Publicacion,
    },
    Comentarios: {
        screen: Comentarios,
    }
});

export default StackFollow;