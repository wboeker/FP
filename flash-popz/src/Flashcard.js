import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FlashCard.css';
import { Form } from 'react-bootstrap';

class FlashCard extends Component{
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.renderCorrect = this.renderCorrect.bind(this);

    this.state = {
      inputCorrect: 0,
    }
  }

  handleInput(event) {
    if(event.keyCode === 13) {
      if (event.target.value.toLowerCase() === this.props.english) {
        this.setState({inputCorrect: 1});
      }
      else if (event.target.value.toLowerCase() !== this.props.english) {
        this.props.updateIndices(this.props.index);
        this.setState({inputCorrect: 2});
      }
    }
  }

  renderCorrect() {
    if (this.state.inputCorrect === 0) {
      return (<div></div>);
    }
    if (this.state.inputCorrect === 1) {
      return (<div>Correct!</div>);
    }
    if (this.state.inputCorrect === 2) {
      return (<div>Incorrect!</div>);
    }
  }

  render(props){
    console.log(this.props.index);
      return(
        <div className="flash-card">
          <h2>{this.props.reading}</h2>
          <h1>{this.props.word}</h1>
          <hr/>
          {this.props.isInput ?
            (<Form.Control type="text" onKeyUp={this.handleInput}/>) :
            (<h1>{this.props.english}</h1>)
          }
          <div>
            {this.renderCorrect()}
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
  isInput: PropTypes.bool,
  updateIndices: PropTypes.func,
  index: PropTypes.number
}

export default FlashCard;
