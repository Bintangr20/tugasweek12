import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Game from './game'
    

function App() {
  return (
    <Provider store={store}>
      <div className="bg-blue-300">
        <Game />
      </div>
    </Provider>
  );
}

export default App;
