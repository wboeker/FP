import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Episode.css';
import FlashCard from './FlashCard'
import { Button } from 'react-bootstrap';
import { vocab } from './constants';

class Episode extends Component{
  constructor(props) {
    super(props);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);

    this.state = {
      index: 0,
    }
  }

  handlePrev(event) {
    if (this.state.index > 0) {
      this.setState({index: this.state.index - 1});
    }
  }

  handleNext(event) {
    if (this.state.index < vocab.length - 1)
    this.setState({index: this.state.index + 1});
  }

  render(props){
    let index = this.state.index;
      return(
        <div className="episode">
          <div className="carousel-container">
            <h3 className="episode-title"> Season 1 Episode 1: Rebirth </h3>
              <div className="flash-wrapper">
                <FlashCard word={vocab[index].word} reading={vocab[index].reading}
                english={vocab[index].english} sentence={vocab[index].sentence}/>
              </div>
            <div className="bottom-row">
              <button type="button" class="btn btn-light" onClick={this.handlePrev}>Previous</button>
              <button type="button" class="btn btn-light" onClick={this.handleNext}>Next</button>
            </div>
          </div>
        </div>
      )
  }
}

export default Episode;
