import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components';
import './App.css';
import magnifying from './magnifying-glass.png'
import GifContainer from './components/GifContainer.js';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  padding: 3rem 1rem;
  resize-mode: contain;
  height: 10%;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">GIF FINDER X-TREME</h1>
        <Rotate><img className="magnifying" src={magnifying} alt=""/></Rotate>
        <GifContainer />
      </div>
    );
  }
}

export default App;
