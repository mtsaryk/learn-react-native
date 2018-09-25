import React from 'react';
import {Image, View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {textColor, fontFamily, defaultFontSize, width, darkColor} from "../../constants";

const ImageCard = ({data, onPress}) => {
    const {h1, container, img, shadow} = styles;
    const {name, image} = data;
    let imgUrl = '';
    if(image && image.medium){
        imgUrl = `https${image.medium.slice(4)}`;
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={container}>
                <View style={shadow}>
                    <Image
                        style={img}
                        source={{uri: imgUrl}}
                    />
                </View>
                <Text style={h1}>{name.toUpperCase()}</Text>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    h1: {
        color: textColor,
        fontFamily,
        fontSize: defaultFontSize * 1.5,
        textAlign: 'center',
        alignSelf: 'center',
        width: width / 2.4,
        paddingTop: 10
    },
    shadow: {
        shadowColor: darkColor,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.4,
        elevation: 12,
        borderRadius: 10,
        backgroundColor: darkColor,
        alignSelf: 'center',
    },
    container: {
        width: width / 2.2,
        padding: 10,
        paddingVertical: 35
    },
    img: {
        width: width / 2.4,
        height: width * 0.63,
        borderRadius: 10
    }
});

export {ImageCard};
