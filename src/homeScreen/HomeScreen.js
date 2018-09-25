import React, {Component} from 'react';
import {Platform, View} from 'react-native';
import {Header, ImageCard, Layout, SearchBar} from "../components/uikit";
import {DETAILS} from "../routing";


const platform = Platform.select({
    ios: 'IOS',
    android: 'Android',
});

const searchUrl = 'http://api.tvmaze.com/search/shows?q=';
const startUrl = 'http://api.tvmaze.com/schedule';
type Props = {};
export default class HomeScreen extends Component<Props> {
    state = {
        title: 'Home',
        data: [],
        visibleSearchBar: false,
        searchValue: ''
    };

    getData = async (url, searchValue) => {
        try {
            const res = await fetch(url + (searchValue ? searchValue : ''));
            const data = await res.json();
            this.setState({data, title: searchValue ? searchValue : this.state.title});
        }
        catch (e) {
            throw e;
        }
    };

    componentDidMount = this.getData(startUrl);

    onGoBack(dataFromChildren) {
        console.log('dataFromChildren', dataFromChildren)
    }

    handleSubmit = ()=>{
        const visibleSearchBar = !this.state.visibleSearchBar;
        this.setState({visibleSearchBar});
        if (this.state.searchValue) {
            this.getData(searchUrl, this.state.searchValue);
        }
    };

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
                        autoFocus={true}
                        onPress={this.handleSubmit}
                        onChangeText={(text) => {
                            this.setState({searchValue: text});
                        }}
                        onBlur={() => {
                            this.setState({visibleSearchBar: false});
                        }}
                        onSubmitEditing={this.handleSubmit}
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
                    {
                        data.map((item) => {
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
