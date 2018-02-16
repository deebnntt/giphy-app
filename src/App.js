import React, { Component } from 'react';
import './App.css';
import GifContainer from './components/GifContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gif Searcher X-TREME</h1>
        </header>
        <GifContainer />
      </div>
    );
  }
}

export default App;
