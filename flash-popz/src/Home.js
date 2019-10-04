import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import Show from './Show';
import { shows } from './constants';

class Home extends Component{
  constructor(props) {
    super(props);
  }

  render(props){
    let searchVal = this.props.searchVal;
    let filteredShows = shows.filter(function(show){
      return show.name.toLowerCase().includes(searchVal.toLowerCase());
    });
      return(
        <div className="home">
          {filteredShows.map((show) =>
            {
                return(
                    <a href="/list">
                      <Show image={show.image}/>
                    </a>
                );
            }
          )}
        </div>
      )
  }
}

Home.propTypes = {
  searchVal: PropTypes.string,
}

export default Home;
