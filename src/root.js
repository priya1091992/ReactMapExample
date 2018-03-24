
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import App from './container/DisplayPlaces/index'
import store from './store';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
