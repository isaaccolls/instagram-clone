import { createStackNavigator } from 'react-navigation';
import Add from './Add';
import SeleccionarGaleria from './SeleccionarGaleria';

const StackAdd =  createStackNavigator({
    Add: {
        screen: Add,
    },
    Seleccion: {
        screen: SeleccionarGaleria,
    }
});

StackAdd.navigationOptions = ({ navigation }) => {
    // console.log("navigation!!");
    // console.log(navigation);
    // console.log(JSON.stringify(navigation));
    let { routeName } = navigation.state.routes[navigation.state.index];
    let navigationOptions = {};
      if (routeName === 'Seleccion') {
        navigationOptions.tabBarVisible = false;
    }
    return navigationOptions;
};


export { StackAdd };