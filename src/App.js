import React, { Component } from 'react';
import './App.css';
import GifContainer from './components/GifContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">GIF FINDER X-TREME</h1>
        <GifContainer />
      </div>
    );
  }
}

export default App;
