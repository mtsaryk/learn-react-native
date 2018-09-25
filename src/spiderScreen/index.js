import {createStackNavigator} from 'react-navigation';
import HomeScreen from "./HomeScreen";

import {SPIDER_HOME, DETAILS} from "../routing";
import DetailsScreen from "../components/uikit/DetailsScreen";

export default createStackNavigator(
    {
        [SPIDER_HOME] : HomeScreen,
        [DETAILS] : DetailsScreen,
    },
    {
        headerMode: 'none'
    }
)