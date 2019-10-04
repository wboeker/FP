import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Episode.css';
import FlashCard from './FlashCard'
import { Button, Modal } from 'react-bootstrap';
import { vocab } from './constants';

class Episode extends Component{
  constructor(props) {
    super(props);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleSentence = this.handleSentence.bind(this);
    this.handleNext = this.handleNext.bind(this);

    this.state = {
      index: 0,
      sentenceOpen: false,
    }
  }

  handlePrev(event) {
    if (this.state.index > 0) {
      this.setState({index: this.state.index - 1, sentenceOpen: false});
    }
  }

  handleSentence(event) {
    this.setState({sentenceOpen: !this.state.sentenceOpen});
  }

  handleNext(event) {
    if (this.state.index < vocab.length - 1)
    this.setState({index: this.state.index + 1, sentenceOpen: false});
  }

  render(props){
    let index = this.state.index;
      return(
        <div className="episode">
          <div className="carousel-container">
            <h3 className="episode-title"> Season 1 Episode 1: Rebirth </h3>
              <div className="flash-wrapper">
                {this.state.sentenceOpen ?
                  (<div className="sentence-wrapper">
                    <p>{vocab[index].sentReading}</p>
                    <h2>{vocab[index].sentence}</h2>
                    <hr/>
                    <h3>{vocab[index].engSent}</h3>
                  </div>) :
                  (<FlashCard word={vocab[index].word} reading={vocab[index].reading}
                      english={vocab[index].english} sentence={vocab[index].sentence}/>)
                }
              </div>
            <div className="bottom-row">
              <Button variant="light" onClick={this.handlePrev}>Previous</Button>
              <Button variant="info" onClick={this.handleSentence}> {this.state.sentenceOpen ? ("Close") : ("Sentence")} </Button>
              <Button variant="light" onClick={this.handleNext}>Next</Button>
            </div>
          </div>
        </div>
      )
  }
}

export default Episode;
