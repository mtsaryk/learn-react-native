import React, {Component} from 'react';
import {Platform, View} from 'react-native';
import {Header, ImageCard, Layout} from "../components/uikit";
import {SPIDER_DETAILS} from "../routing";


const platform = Platform.select({
    ios: 'IOS',
    android: 'Android',
});

const url = 'http://api.tvmaze.com/search/shows?q=spider-man';
type Props = {};
export default class HomeScreen extends Component<Props> {
    state = {
        title: 'SPIDER MAN',
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

    onGoBack(dataFromChildren) {
        console.log('dataFromChildren', dataFromChildren)
    }

    render() {
        const {title, data} = this.state;
        const {navigation} = this.props;
        return (
            <View>
                <Header title={title}
                        leftIcon={'bars'}
                        leftButtonColor={'#fff'}
                        onPress={() => {
                            navigation.openDrawer()
                        }}/>
                <Layout>
                    {data.map((item) => {
                        return (
                            <ImageCard
                                key={item.show.id}
                                data={item.show}
                                onPress={() => {
                                    navigation.navigate(SPIDER_DETAILS, ({show: item.show, onGoBack: this.onGoBack}));
                                    console.log(navigation)
                                }}
                            />
                        )
                    })}
                </Layout>
            </View>
        );
    }
}

