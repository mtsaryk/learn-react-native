import React from 'react';

import {StyleSheet, View, ScrollView} from 'react-native';

import {firstColor} from "../../constants";

const Layout = (props) => {
    const {content} = styles;
    return (
        <ScrollView>
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
        paddingBottom: 50
    }
});

export {Layout};
