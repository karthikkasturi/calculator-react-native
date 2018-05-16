import { AppRegistry } from 'react-native';
import App from './App';
import React, {Component} from 'react'

import {Provider} from 'react-redux'
import configureStore from './store/store'

const store = configureStore()

class IndexProvider extends Component{
    render(){
        return(
            <Provider store = {store}>
                <App/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('calculator', () => IndexProvider);
