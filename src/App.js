import React, { Component } from 'react'
import { composeWithDevTools } from "redux-devtools-extension"
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import gifReducer from './reducers/gifReducer.js'
import styled, { keyframes } from 'styled-components'
import './App.css';
import magnifying from './magnifying-glass.png'
import GifContainer from './components/GifContainer.js';

const store = createStore(gifReducer, composeWithDevTools(applyMiddleware(thunk)));


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
      <Provider store={store}>
        <div className="App">
          <h1 className="App-title">GIF FINDER X-TREME</h1>
          <Rotate><img className="magnifying" src={magnifying} alt=""/></Rotate>
          <GifContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
