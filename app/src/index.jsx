import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';

import App from './components/App.jsx';
// CSS
import '../stylesheets/App.less';

renderWithHotReload(App);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/App.jsx', () => {
		const App = require('./components/App.jsx').default;
		renderWithHotReload(App);
	});
}

function renderWithHotReload(App) {
	render(<App />, document.getElementById('root'));
}
