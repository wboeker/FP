import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import EpisodeList from './EpisodeList';
import Episode from './Episode';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
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

  render() {
    return (
      <div className="App">
        <Header handleSearch={this.handleSearch}/>
        <Route exact path="/" render={(props) => <Home {...props} searchVal={this.state.searchVal} />}/>
        <Route exact path="/list" component={EpisodeList}/>
        <Route exact path="/episode" component={Episode}/>
        <Route exact path="/about" component={About}/>
      </div>
    );
  }
}

export default App;
