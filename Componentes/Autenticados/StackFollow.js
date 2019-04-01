import { createStackNavigator } from 'react-navigation';
import TabFollow from './TabFollow';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';

const StackFollow = createStackNavigator({
    TabFollow: {
        screen: TabFollow,
        navigationOptions: {
            header: null,
        },
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

StackFollow.navigationOptions = ({ navigation }) => {
    // console.log("navigation!!");
    // console.log(navigation);
    // console.log(JSON.stringify(navigation));
    let { routeName } = navigation.state.routes[navigation.state.index];
    let navigationOptions = {};
      if (routeName === 'Comentarios') {
        navigationOptions.tabBarVisible = false;
    }
    return navigationOptions;
};

export default StackFollow;