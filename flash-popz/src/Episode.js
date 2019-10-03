import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Episode.css';
import FlashCard from './FlashCard'
import { Button } from 'react-bootstrap';

class Episode extends Component{

  render(props){
      return(
        <div className="episode">
          <div className="carousel-container">
            <h3 className="episode-title"> Season 1 Episode 1: Rebirth </h3>
              <div className="flash-wrapper">
                <FlashCard/>
              </div>
            <div className="bottom-row">
              <button type="button" class="btn btn-light">Previous</button>
              <button type="button" class="btn btn-light">Next</button>
            </div>
          </div>
        </div>
      )
  }
}

export default Episode;
