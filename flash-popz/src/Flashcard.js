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
          <h1>高校</h1>
          <h1>High School</h1>
          <h2>高校生なら、月曜日から金曜日まで高校に行かなければなりません。</h2>
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
