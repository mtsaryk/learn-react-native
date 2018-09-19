import React, {Component} from 'react';
import {Platform, View} from 'react-native';
import {Header, ImageCard, Layout} from "./src/components/uikit";

const platform = Platform.select({
    ios: 'IOS',
    android: 'Android',
});

const url = 'https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json';
type Props = {};
export default class App extends Component<Props> {
    state = {
        title: 'Star Gate',
        data: []
    };


    componentDidMount = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            this.setState({data});
        }
        catch (e) {
            throw e;
        }
    };

    render() {
        const {title, data} = this.state;
        return (
            <View>
                <Header title={title}/>
                <Layout>
                    {data.map((item) => {
                        return (
                            <ImageCard key={item.id} data={item}/>
                        )
                    })}
                </Layout>
            </View>
        );
    }
}

