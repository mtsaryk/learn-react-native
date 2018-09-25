import React from 'react';
import {createDrawerNavigator} from 'react-navigation';
import homeScreen from './src/homeScreen';
import {defaultFontSize, secondColor} from "./src/constants";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AboutScreen from "./src/aboutScreen/AboutScreen";


export default createDrawerNavigator({
        Home: {
            screen: homeScreen,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: ({tintColor}) => (
                    <MaterialIcons name="home" size={defaultFontSize * 1.5} style={{color: tintColor}}/>
                )
            }
        },
        About: {
            screen: AboutScreen,
            navigationOptions: {
                drawerLabel: 'About',
                drawerIcon: ({tintColor}) => (
                    <MaterialIcons name="info" size={defaultFontSize * 1.5} style={{color: tintColor}}/>
                )
            }
        }
    },
    {
        initialRouteName: 'Home',
        contentOptions: {
            activeTintColor: secondColor,
            itemsContainerStyle: {
                marginVertical: 60,
            },
            labelStyle: {
                fontSize: defaultFontSize * 1.5
            }
        }
    }
)
