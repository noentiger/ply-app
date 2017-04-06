import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { OffersContainer } from './offers';
import { Header } from './components';
import './App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div className="App">
      <Header />
      <OffersContainer />
    </div>
  </MuiThemeProvider>
  );

export default App;
