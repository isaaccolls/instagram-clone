import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import Follow from './Follow';

const TabFollow = createMaterialTopTabNavigator(
    {
        Follow: {
            screen: Follow,
        },
        Followers: {
            screen: Follow,
        }
    },
    {
        tabBarPosition: 'top',
    }
);

export default createAppContainer(TabFollow);
// export default TabFollow;