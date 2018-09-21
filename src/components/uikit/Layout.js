import React from 'react';

import {StyleSheet, View, ScrollView} from 'react-native';

import {firstColor, height} from "../../constants";

const Layout = (props) => {
    const {content, wrapper} = styles;
    return (
        <ScrollView style={wrapper}>
            <View style={content}>
                {props.children}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: firstColor,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'space-around',
        paddingBottom: height * 0.1
    },
    wrapper: {
        backgroundColor: firstColor,
        minHeight: height
    }
});

export {Layout};
