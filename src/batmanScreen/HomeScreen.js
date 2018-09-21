import React, {Component} from 'react';
import {Platform, View, StyleSheet} from 'react-native';
import {Header, ImageCard, Layout} from "../components/uikit";
import {BATMAN_DETAILS} from "../routing";


const platform = Platform.select({
    ios: 'IOS',
    android: 'Android',
});

const url = 'http://api.tvmaze.com/search/shows?q=Batman';
type Props = {};
export default class HomeScreen extends Component<Props> {
    state = {
        title: 'BATMAN',
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
        const {navigation} = this.props;
const {t} = ttt;
        return (
            <View style={t}>
                <Header title={title}/>
                <Layout>
                    {data.map((item) => {
                        return (
                            <ImageCard
                                key={item.show.id}
                                data={item.show}
                                onPress={()=>{
                                    navigation.navigate(BATMAN_DETAILS, (item.show));
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

const ttt = StyleSheet.create({
    t: {
        backgroundColor: 'red'
    }
});