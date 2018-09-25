import {createStackNavigator} from 'react-navigation';
import HomeScreen from "./HomeScreen";

import {HOME, DETAILS} from "../routing";
import DetailsScreen from "../components/uikit/DetailsScreen";

export default createStackNavigator(
    {
        [HOME]: HomeScreen,
        [DETAILS]: DetailsScreen,
    },
    {
        headerMode: 'none'
    }
)