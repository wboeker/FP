import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Episode.css';
import FlashCard from './FlashCard'
import { Button, Modal } from 'react-bootstrap';
import { DB_CONFIG } from './Config/Firebase/db_config';
import firebase from 'firebase/app';
import 'firebase/database';
import { ReactComponent as SpeakerIcon } from './speaker.svg';
import ReactAudioPlayer from "react-audio-player";
import ExampleSound from "./Data/apartment.wav";

class Episode extends Component {
  constructor(props) {
    super(props);
    this.handleSentence = this.handleSentence.bind(this);
    this.getRandomCard = this.getRandomCard.bind(this);
    this.updateVocab = this.updateVocab.bind(this);
    this.playSound = this.playSound.bind(this);

    if (!firebase.apps.length) {
      firebase.initializeApp(DB_CONFIG);
    }
    this.database = firebase.database().ref().child('vocab');

    this.state = {
      sentenceOpen: false,
      vocab: [],
      currentVocab: {},
      indices: []
    }
  }

  componentDidMount() {
    const vocab = this.state.vocab;

    this.database.on('child_added', snap => {
      vocab.push({
        id: snap.key,
        word: snap.val().word,
        reading: snap.val().reading,
        english: snap.val().english,
        sentence: snap.val().sentence,
        sentReading: snap.val().sentReading,
        engSent: snap.val().engSent,
        isInput: snap.val().isInput
      })

      this.setState({
        indices: this.state.vocab.map((word, index) => { return index; })
      })

      this.setState({
        currentVocab: this.getRandomCard(vocab, this.state.indices)
      })
    })
  }

  getRandomCard(vocab, indices) {
    let currentVocab = vocab[indices[Math.floor(Math.random() * indices.length)]];
    return currentVocab;
  }

  handleSentence(event) {
    this.setState({ sentenceOpen: !this.state.sentenceOpen });
  }

  updateVocab() {
    this.state.currentVocab.isInput = true;
    this.state.sentenceOpen = false;

    this.setState({
      currentVocab: this.getRandomCard(this.state.vocab, this.state.indices)
    })
  }

  renderCorrect() {
    if (this.state.sentenceOpen && this.state.currentVocab.isInput) {
      return (<div className="sentence-wrapper">
        <h1>{this.state.currentVocab.english}</h1>
      </div>);
    }
    else if (this.state.sentenceOpen && !this.state.currentVocab.isInput) {
      return (<div className="sentence-wrapper">
        <p>{this.state.currentVocab.sentReading}</p>
        <h2>{this.state.currentVocab.sentence}</h2>
        <hr />
        <h3>{this.state.currentVocab.engSent}</h3>
      </div>);
    }
    else {
      return (<FlashCard key={this.state.currentVocab.word} index={this.state.currentIndex} word={this.state.currentVocab.word} reading={this.state.currentVocab.reading}
        english={this.state.currentVocab.english} sentence={this.state.currentVocab.sentence} isInput={this.state.currentVocab.isInput}
        updateIndices={this.updateIndices} />);
    }
  }

  playSound() {
    // let audio = new Audio("/Data/apartment.wav");
    // audio.play();

  }

  render(props) {
    let currentVocab = this.state.currentVocab;
    let audio = "https://firebasestorage.googleapis.com/v0/b/tartanhacks2020.appspot.com/o/" + this.state.currentVocab.english + ".wav?alt=media";
    console.log(ExampleSound);
    return (
      <div className="episode">
        <div className="carousel-container">
          <h3 className="episode-title"> Season 1 Episode 1: Rebirth </h3>
          <div className="flash-wrapper">
            {this.renderCorrect()}
          </div>
          <div className="bottom-row">
            {currentVocab.isInput ? (<Button variant="info" onClick={this.handleSentence}> {this.state.sentenceOpen ? ("Close") : ("Answer")} </Button>) : (<Button variant="info" onClick={this.handleSentence}> {this.state.sentenceOpen ? ("Close") : ("Sentence")} </Button>)}
            <ReactAudioPlayer src={audio} autoPlay controls />
            <Button variant="light" onClick={this.updateVocab}>Next</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Episode;
