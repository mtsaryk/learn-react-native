import {createStackNavigator} from 'react-navigation';
import HomeScreen from "./HomeScreen";

import {STARGATE_HOME, DETAILS} from "../routing";
import DetailsScreen from "../components/uikit/DetailsScreen";

export default createStackNavigator(
    {
        [STARGATE_HOME] : HomeScreen,
        [DETAILS] : DetailsScreen,
    },
    {
        headerMode: 'none'
    }
)