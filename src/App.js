import React, { Component ,} from 'react';
import { Provider, } from 'react-redux';
import { StatusBar, } from 'react-native';
import configureStore from './configureStore';
import Router from './router';
import DrawerNavigation from './components/DrawerNavigation';

import {
  NavigationProvider,
} from '@exponent/ex-navigation';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({isLoading: false}))
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <NavigationProvider router={Router}>
          <StatusBar barStyle="light-content" />
          <DrawerNavigation />
        </NavigationProvider>
      </Provider>
    );
  }
}

export default App;
