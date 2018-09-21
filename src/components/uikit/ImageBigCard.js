import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {darkColor, height, width} from "../../constants";
const ImageBigCard = ({data}) => {
    const {name, image} = data;
    const imgUrl = `https${image.medium.slice(4)}`;
    const {container, img, shadow} = styles;

    return (
        <View style={container}>
            <View style={shadow}>
                <Image
                    style={img}
                    source={{uri: imgUrl}}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
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
        paddingVertical: 35,
    },
    img: {
        width: width / 1.67,
        height: width * 0.9,
        borderRadius: 10
    }
});
export {ImageBigCard};
