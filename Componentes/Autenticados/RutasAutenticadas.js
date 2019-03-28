import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import Add from './Add';
import Follow from './Follow';
import Profile from './Profile';


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
        screen: Follow,
    },
    Profile: {
        screen: Profile,
    },
});

export default createAppContainer(RutasAutenticadas);