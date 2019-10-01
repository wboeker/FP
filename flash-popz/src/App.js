import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import EpisodeList from './EpisodeList';
import { Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/list" component={EpisodeList}/>
    </div>
  );
}

export default App;
