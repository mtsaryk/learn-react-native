import React, {Component} from 'react';
import {Platform, View, Text} from 'react-native';
import {Header} from "../components/uikit";


const platform = Platform.select({
    ios: 'IOS',
    android: 'Android',
});

type Props = {};
export default class AboutScreen extends Component<Props> {
    state = {
        title: 'About'
    };

    render() {
        const {title} = this.state;
        const {navigation} = this.props;
        return (
            <View>
                <Header
                    title={title}
                    leftIcon={'bars'}
                    onPress={() => {
                        navigation.openDrawer()
                    }}
                    onPressSearch={() => {
                        this.setState({visibleSearchBar: !visibleSearchBar});
                    }}
                />
                <View>
                    <Text>Hello WORLD!!! It is about page</Text>
                </View>
            </View>
        );
    }
}
