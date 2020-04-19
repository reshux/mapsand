import { AppContainer } from 'react-hot-loader'; // requiredà
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App.jsx'; // App

renderWithHotReload(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App.jsx', () => {
    const App = require('./containers/App.jsx').default;
    renderWithHotReload(App);
  });
}

function renderWithHotReload(App) {
  render(<App />, document.getElementById('root'));
}
