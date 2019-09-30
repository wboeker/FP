import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import EpisodeList from './EpisodeList';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/list" component={EpisodeList}/>
    </div>
  );
}

export default App;
