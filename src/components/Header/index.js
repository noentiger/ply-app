import React from 'react';
import './Header.css';
import logo from './logo.svg';

const Header = () => (
  <div className="App-header">
    <h1 className="Header-title">Ply.</h1>
    <img src={logo} alt="Ply" className="Header-logo" />
  </div>
  );

export default Header;
