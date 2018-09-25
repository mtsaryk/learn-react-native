import {createStackNavigator} from 'react-navigation';
import HomeScreen from "./HomeScreen";

import {BATMAN_HOME, DETAILS} from "../routing";
import DetailsScreen from "../components/uikit/DetailsScreen";

export default createStackNavigator(
    {
        [BATMAN_HOME]: HomeScreen,
        [DETAILS]: DetailsScreen,
    },
    {
        headerMode: 'none'
    }
)