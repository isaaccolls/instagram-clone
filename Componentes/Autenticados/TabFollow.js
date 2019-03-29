import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Follow from './Follow';

const TabFollow = createBottomTabNavigator(
    {
        Follow: {
            screen: Follow,
        },
        Followers: {
            screen: Follow,
        }
    }
);

export default createAppContainer(TabFollow);