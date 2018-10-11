import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Screen from './src/homeScreen';


const store = createStore(reducers, applyMiddleware(ReduxThunk))
const App = () => {
    return (
        <Provider store={store}>
            <Screen />
        </Provider>
    )
}

export default App