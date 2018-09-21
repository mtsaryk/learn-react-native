import {createStackNavigator} from 'react-navigation';
import HomeScreen from "./HomeScreen";

import {BATMAN_HOME, BATMAN_DETAILS} from "../routing";
import DetailsScreen from "./DetailsScreen";

export default createStackNavigator(
    {
        [BATMAN_HOME]: HomeScreen,
        [BATMAN_DETAILS]: DetailsScreen,
    },
    {
        headerMode: 'none'
    }
)