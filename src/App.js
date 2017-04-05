import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { OffersContainer } from './offers';
import './App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div className="App">
      <div className="App-header">
        <h2>Ply</h2>
      </div>
      <OffersContainer />
    </div>
  </MuiThemeProvider>
  );

export default App;
