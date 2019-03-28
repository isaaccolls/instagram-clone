import { createStackNavigator, createAppContainer } from 'react-navigation';
import Search from './Search';
import Publicacion from './Publicacion';
import Autor from './Profile';
import Comentarios from './Comentarios';

const StackSearch = createStackNavigator({
    Search: {
        screen: Search,
    },
    Publicacion: {
        screen: Publicacion,
    },
    Autor: {
        screen: Autor,
    },
    Comentarios: {
        screen: Comentarios,
    },
});

StackSearch.navigationOptions = ({ navigation }) => {
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

export default StackSearch;