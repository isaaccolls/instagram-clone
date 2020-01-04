import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import Profile from './Profile';
import StackFollow from './StackFollow';
import { StackAdd } from './StackAdd';

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
        screen: StackAdd,
    },
    Follow: {
        screen: StackFollow,
    },
    Profile: {
        screen: Profile,
    },
});

export default createAppContainer(RutasAutenticadas);