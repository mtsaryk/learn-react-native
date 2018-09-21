import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import stargateScreen from './src/stargateScreen';
import batmanScreen from './src/batmanScreen';
import spiderScreen from './src/spiderScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {defaultFontSize, secondColor, height} from "./src/constants";

export default createBottomTabNavigator(
    {
        Stargate: stargateScreen,
        Batman: batmanScreen,
        Spiderman: spiderScreen
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'Stargate') {
                    iconName = focused ? 'ios-play' : 'ios-videocam';
                } else if (routeName === 'Batman') {
                    iconName = focused ? 'ios-play' : 'ios-videocam';
                } else if (routeName === 'Spiderman') {
                    iconName = focused ? 'ios-play' : 'ios-videocam';
                }
                return <Ionicons name={iconName} size={defaultFontSize*2} color={tintColor}/>
            }
        }),
        tabBarOptions: {
            activeTintColor: secondColor,
            inactiveTintColor: 'gray',
            labelStyle: { fontSize: defaultFontSize*1.6 },
            style:{
                height: height*0.05
            }
        }
    }
)