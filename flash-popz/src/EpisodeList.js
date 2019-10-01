import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EpisodeList.css';
import Episode from './Episode';

class EpisodeList extends Component{

  render(props){
      return(
        <div className="episode-list">
          <Episode/>
        </div>
      )
  }
}

export default EpisodeList;
