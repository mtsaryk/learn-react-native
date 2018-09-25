import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {lightColor, defaultFontSize, fontFamily, darkColor, secondColor, width} from "../../constants";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// (props)=>{return (... props.key ...)
const SearchBar = ({
                       onPress,
                       onChangeText,
                       rightIcon,
                       value,
                       placeholder,
                       onBlur
                   }) => {
    const {header, wrapper, rightButtonStyle, searchInput, searchButton, searchButtonWrapper} = styles;
    return (
        <View style={header}>
            <View style={wrapper}>
                <TextInput
                    value={value}
                    style={searchInput}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    onBlur={onBlur}
                />
                {
                    rightIcon &&
                    (<TouchableOpacity onPress={onPress} style={searchButton}>
                        <View style={searchButtonWrapper}>
                            <MaterialCommunityIcons name={rightIcon} style={[rightButtonStyle, {color: lightColor}]}/>
                        </View>
                    </TouchableOpacity>)
                }
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: secondColor,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 19,
        position: 'relative',
        shadowColor: darkColor,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 11
    },
    wrapper: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: width - 45,
        backgroundColor: lightColor,
        height: 60,
        borderRadius: 30,
    },
    headerText: {
        color: lightColor,
        fontSize: defaultFontSize * 2,
        fontFamily: fontFamily,
        lineHeight: defaultFontSize * 2,
    },
    rightButtonStyle: {
        fontSize: defaultFontSize * 2
    },
    searchInput: {
        fontSize: defaultFontSize * 1.5,
        marginLeft: 0,
        backgroundColor: lightColor,
        height: 60,
        borderRadius: 30,
        paddingHorizontal: 30,
        width: width - 100
    },
    searchButton: {

    },
    searchButtonWrapper: {
        marginLeft: -15,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 30,
    }
});


export {SearchBar};