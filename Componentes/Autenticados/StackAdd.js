import { createStackNavigator } from 'react-navigation';
import Add from './Add';
import SeleccionarGaleria from './SeleccionarGaleria';

const StackAdd =  createStackNavigator({
    Home: {
        screen: Add,
    },
    Seleccion: {
        screen: SeleccionarGaleria,
    }
});

export { StackAdd };