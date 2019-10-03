import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import EpisodeList from './EpisodeList';
import Episode from './Episode';
import { Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function App() {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      searchVal: "",
    }
  }

  handleSearch(event) {
    this.setState({searchVal: event.target.value});
  }

  return (
    <div className="App">
      <Header handleSearch={this.handleSearch}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/list" component={EpisodeList}/>
      <Route exact path="/episode" component={Episode}/>
      <Route exact path="/about" component={About}/>
    </div>
  );
}

export default App;
