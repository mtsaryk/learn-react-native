import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {lightColor, defaultFontSize, fontFamily, darkColor, secondColor} from "../../constants";

// (props)=>{return (... props.key ...)
const Header = ({title}) => {
    const {header, headerText} = styles;
    return (
        <View style={header}>
            <Text style={headerText}>{title}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    header: {
        backgroundColor: secondColor,
        justifyContent: 'center',
        padding: 30,
        position: 'relative',
        shadowColor: darkColor,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 11
    },
    headerText: {
        color: lightColor,
        fontSize: defaultFontSize * 2,
        fontFamily: fontFamily
    }
});


export {Header};