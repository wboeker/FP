import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FlashCard.css';
import { Form } from 'react-bootstrap';

class FlashCard extends Component{
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      inputCorrect: false,
    }
  }

  handleInput(event) {
    if (event.target.value.toLowerCase() === this.props.english) {
      this.setState({inputCorrect: true});
    }
    else if (event.target.value.toLowerCase() !== this.props.english) {
      this.setState({inputCorrect: false});
    }
  }

  render(props){
      return(
        <div className="flash-card">
          <h2>{this.props.reading}</h2>
          <h1>{this.props.word}</h1>
          <hr/>
          {this.props.isInput ?
            (<Form.Control type="text" onChange={this.handleInput}/>) :
            (<h1>{this.props.english}</h1>)
          }
          <div>
            {this.state.inputCorrect && this.props.isInput ?
              (<div>Correct!</div>) :
              (<div></div>)
            }
          </div>
        </div>
      )
  }
}

FlashCard.propTypes = {
  word: PropTypes.string,
  reading: PropTypes.string,
  english: PropTypes.string,
  sentence: PropTypes.string,
  isInput: PropTypes.bool
}

export default FlashCard;
