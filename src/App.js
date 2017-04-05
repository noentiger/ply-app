import React, { Component } from 'react';
import { OffersContainer } from './offers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Ply</h2>
        </div>
        <OffersContainer />
      </div>
    );
  }
}

export default App;
