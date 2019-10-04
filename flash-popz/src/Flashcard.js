import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FlashCard.css';

class FlashCard extends Component{
  constructor(props) {
    super(props);
  }

  render(props){
      return(
        <div className="flash-card">
          <h2>{this.props.reading}</h2>
          <h1>{this.props.word}</h1>
          <hr/>
          <h1>{this.props.english}</h1>
        </div>
      )
  }
}

FlashCard.propTypes = {
  word: PropTypes.string,
  reading: PropTypes.string,
  english: PropTypes.string,
  sentence: PropTypes.string,
}

export default FlashCard;
