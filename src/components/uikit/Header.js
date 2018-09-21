import React from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {lightColor, defaultFontSize, fontFamily, darkColor, secondColor, width} from "../../constants";
import Icon from 'react-native-vector-icons/FontAwesome';
// (props)=>{return (... props.key ...)
const Header = ({title, onPress, leftIcon, leftButtonColor}) => {
    const {header, headerText, leftButtonStyle, backButton} = styles;
    return (
        <View style={header}>
            <TouchableOpacity onPress={onPress} style={backButton}>
                <Icon name={leftIcon}  color={leftButtonColor} style={leftButtonStyle}/>
            </TouchableOpacity>
            <Text numberOfLines={1} ellipsizeMode={"tail"} style={headerText}>{title}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: secondColor,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
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
        fontFamily: fontFamily,
        lineHeight: defaultFontSize * 2,
    },
    leftButtonStyle: {
        fontSize: defaultFontSize * 2
    },
    backButton: {
        marginRight: 15
    }
});


export {Header};