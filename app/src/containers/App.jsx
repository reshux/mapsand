import React, { Component } from 'react';

// child components
import Map from '../components/Map.jsx';

export default class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Map />
      </div>
    );
  }
}
