import {createStackNavigator} from 'react-navigation';
import HomeScreen from "./HomeScreen";

import {SPIDER_HOME, SPIDER_DETAILS} from "../routing";
import DetailsScreen from "./DetailsScreen";

export default createStackNavigator(
    {
        [SPIDER_HOME] : HomeScreen,
        [SPIDER_DETAILS] : DetailsScreen,
    },
    {
        headerMode: 'none'
    }
)