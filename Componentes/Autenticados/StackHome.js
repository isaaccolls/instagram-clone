import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';

const StackHome = createStackNavigator({
    Home: {
        screen: Home,
    },
    Autor: {
        screen: Autor,
    },
    Publicacion: {
        screen: Publicacion,
    },
    Comentarios: {
        screen: Comentarios,
        // navigationOptions: ({ navigation }) => ({
        //     // title: 'asdads',
        //     tabBarVisible: false,
        // }),
    },
});

StackHome.navigationOptions = ({ navigation }) => {
    // console.log("navigation!!");
    // console.log(navigation);
    // console.log(JSON.stringify(navigation));
    let tabBarVisible = true;
    // if (navigation.state.index == 1) {
    if (navigation.state.routes[navigation.state.routes.length - 1].routeName == "Comentarios") {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

export default StackHome;
// export default createAppContainer(StackHome);