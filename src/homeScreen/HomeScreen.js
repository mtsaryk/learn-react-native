import React, {Component} from 'react';
import {Platform, View} from 'react-native';
import {Header, ImageCard, Layout, SearchBar} from "../components/uikit";
import {DETAILS} from "../routing";
import {connect } from 'react-redux';
import {getMovies, searchChanged} from "../actions";

const platform = Platform.select({
    ios: 'IOS',
    android: 'Android',
});

const searchUrl = 'http://api.tvmaze.com/search/shows?q=';
const startUrl = 'http://api.tvmaze.com/schedule';
type Props = {};
class HomeScreen extends Component<Props> {
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

    handleSubmit = () => {
        const visibleSearchBar = !this.state.visibleSearchBar;
        this.setState({visibleSearchBar});
        if (this.props.movie) {
            this.props.getMovies(this.props.movie)
        }
    };

    render() {
        const {title, visibleSearchBar} = this.state;
        const {navigation, searchChanged, movie, getMovies, data} = this.props;
        console.log('this.props',this.props);
        return (
            <View>
                {visibleSearchBar ?
                    <SearchBar
                        rightIcon='magnify'
                        placeholder='search...'
                        value={movie}
                        autoFocus={true}
                        onPress={this.handleSubmit}
                        onChangeText={(text) => {
                            searchChanged(text);
                        }}
                        onBlur={() => {
                            this.setState({visibleSearchBar: false});
                        }}
                        onSubmitEditing={this.handleSubmit}
                    /> :
                    <Header
                        title={title}
                        rightIcon={'magnify'}
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

const mapStateToProps = state => {
    return {
        movie : state.search.movie,
        data: state.search.data
    }
}

export default connect(mapStateToProps, {searchChanged, getMovies})(HomeScreen);
