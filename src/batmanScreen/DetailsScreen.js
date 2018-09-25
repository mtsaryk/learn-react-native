import React, {PureComponent} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Header, ImageBigCard} from "../components/uikit";
import {defaultFontSize, firstColor, fontFamily, height, textColor} from "../constants";

class DetailsScreen extends PureComponent {
    componentWillUnmount() {
        const {onGoBack} = this.props.navigation.state.params;
        onGoBack && onGoBack('hello from children')
    }

    render() {
        console.log(this.props.navigation);
        const {navigation} = this.props;
        const {name, image, summary} = navigation.state.params.show;
        const data = {image, name};
        const {container, scrollView, nameStyles, summaryStyles} = styles;
        return (
            <View style={container}>
                <Header
                    title={name.toUpperCase()}
                    onPress={() => {
                        console.log(navigation);
                        navigation.goBack();
                    }}
                    leftButtonColor='#fff'
                    leftIcon='chevron-left'
                />
                <ScrollView style={scrollView}>
                    <ImageBigCard
                        data={data}
                    />
                    <Text style={nameStyles}>{name}</Text>
                    <Text style={summaryStyles}>{summary.replace(/<[^>]+>/g, '')}</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: firstColor,
    },
    scrollView: {
        backgroundColor: firstColor,
        minHeight: height,
    },
    summaryStyles: {
        color: textColor,
        fontSize: defaultFontSize * 1.8,
        fontFamily: fontFamily,
        textAlign: 'center',
        marginBottom: 160
    },
    nameStyles: {
        color: textColor,
        fontSize: defaultFontSize * 3,
        fontFamily: fontFamily,
        textAlign: 'center'
    }
});

export default DetailsScreen;