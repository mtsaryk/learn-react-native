import React, {Component} from 'react';
import {Platform, View} from 'react-native';
import {Header, ImageCard, Layout, SearchBar} from "../components/uikit";
import {DETAILS} from "../routing";


const platform = Platform.select({
    ios: 'IOS',
    android: 'Android',
});

const url = 'http://api.tvmaze.com/search/shows?q=';
type Props = {};
export default class HomeScreen extends Component<Props> {
    state = {
        title: 'Batman',
        data: [],
        visibleSearchBar: false,
        searchValue: 'Batman'
    };

    getData = async (searchValue) => {
        try {
            const res = await fetch(url + searchValue);
            const data = await res.json();
            this.setState({data, title: searchValue});
        }
        catch (e) {
            throw e;
        }
    };

    componentDidMount = this.getData(this.state.searchValue);

    onGoBack(dataFromChildren) {
        console.log('dataFromChildren', dataFromChildren)
    }

    render() {
        const {title, data, visibleSearchBar, searchValue} = this.state;
        const {navigation} = this.props;
        return (
            <View>
                {visibleSearchBar ?
                    <SearchBar
                        rightIcon='magnify'
                        value={searchValue}
                        placeholder='search...'
                        onPress={() => {
                            this.setState({visibleSearchBar: !visibleSearchBar});
                            if (this.state.searchValue) {
                                this.getData(this.state.searchValue);
                            }
                        }}
                        onChangeText={(text) => {
                            this.setState({searchValue: text});
                        }}
                        onBlur={() => {
                            this.setState({visibleSearchBar: false});
                        }}
                    /> :
                    <Header
                        title={title}
                        leftIcon={'bars'}
                        rightIcon={'magnify'}
                        onPress={() => {
                            navigation.openDrawer()
                        }}
                        onPressSearch={() => {
                            this.setState({visibleSearchBar: !visibleSearchBar});
                        }}
                    />}

                <Layout>
                    {data && data.map((item) => {
                        return (
                            <ImageCard
                                key={item.show.id}
                                data={item.show}
                                onPress={() => {
                                    navigation.navigate(DETAILS, ({show: item.show, onGoBack: this.onGoBack}));
                                }}
                            />
                        )
                    })}
                </Layout>
            </View>
        );
    }
}
