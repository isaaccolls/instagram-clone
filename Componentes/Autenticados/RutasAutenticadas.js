import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import Add from './Add';
import Profile from './Profile';
import StackFollow from './StackFollow';

const RutasAutenticadas = createBottomTabNavigator({
    Home: {
        screen: StackHome,
        navigationOptions: {
            // tabBarVisible: false,
        }
    },
    Search: {
        screen: StackSearch,
    },
    Add: {
        screen: Add,
    },
    Follow: {
        screen: StackFollow,
    },
    Profile: {
        screen: Profile,
    },
});

export default createAppContainer(RutasAutenticadas);