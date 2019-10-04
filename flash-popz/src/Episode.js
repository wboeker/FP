import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Episode.css';
import FlashCard from './FlashCard'
import { Button } from 'react-bootstrap';

class Episode extends Component{

  render(props){
      let vocab = [{word: "悪い", reading: "わるい", english: "bad", sentence: "目に悪いから暗いところで本を読んではいけない。",
      sentReading: "め　に　わるい　から　くらい　ところ　で　ほん　を　よんで　は　いけない", engSent: "Because it is bad for your eyes, do not read under dim light."},
      {word: "勝ち", reading: "かち", english: "win", sentence: "表が出たら僕の勝ち、裏が出たら君の勝ち。",
      sentReading: "ひょう　が　でたら　ぼく　の　かち　うら　が　でたら　きみ　の　かち", engSent: "Heads it's my win, tails it's yours."},
      {word: "思う", reading: "おもう", english: "to think", sentence: "試験が教育を駄目にしていると思う。",
      sentReading: "しけん　が　きょういく　を　だめ　に　している　と　おもう", engSent: "I think exams are ruining education."},
      {word: "仲間", reading: "なかま", english: "comrade", sentence: "彼は私の仕事仲間である。",
      sentReading: "かれ　は　しごと　なかま　である", engSent: "He is my colleague."},
      {word: "入れる", reading: "いれる", english: "to put in", sentence: "彼は大学に入れるように一所懸命勉強した。",
      sentReading: "かれ　は　だいがく　に　いれる　ように　いっしょけんめい　べんきょうした", engSent: "He is my colleague."},
      {word: "今", reading: "いま", english: "now", sentence: "列車は今着いたばかりです。",
      sentReading: "れっしゃ　は　いま　ついた　ばらり　です", engSent: "The train has just arrived here."},
      {word: "神", reading: "かみ", english: "God", sentence: "彼女は神を信じない",
      sentReading: "かのじょ　は　かみ　を　しんじない", engSent: "She doesn't believe in God."}];
      return(
        <div className="episode">
          <div className="carousel-container">
            <h3 className="episode-title"> Season 1 Episode 1: Rebirth </h3>
              <div className="flash-wrapper">
                <FlashCard word={"高校"} reading={"こうこう"}
                english={"High School"} sentence={"高校生なら、月曜日から金曜日まで高校に行かなければなりません"}/>
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
