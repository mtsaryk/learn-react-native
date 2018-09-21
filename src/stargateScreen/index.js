import {createStackNavigator} from 'react-navigation';
import HomeScreen from "./HomeScreen";

import {STARGATE_DETAILS, STARGATE_HOME} from "../routing";
import DetailsScreen from "./DetailsScreen";

export default createStackNavigator(
    {
        [STARGATE_HOME] : HomeScreen,
        [STARGATE_DETAILS] : DetailsScreen,
    },
    {
        headerMode: 'none'
    }
)