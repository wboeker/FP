import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EpisodeList.css';
import Episode from './Episode';

class EpisodeList extends Component{

  render(props){
      let shows = ["deathnote.jpg", "7seeds.jpg", "aggretsuko.jpg", "asilentvoice.jpg", "attackontitan.jpg",
    "blueexorcist.jpg", "pokemon.jpg", "codegeass.jpg", "hunterxhunter.jpg", "ouranhostclub.jpg", "bleach.jpg",
  "vampireknight.jpg"];
      return(
        <div className="episode-list">
            {shows.map((show) =>
              {
                  return(
                      <a href="/">
                        <Episode image={show}/>
                      </a>
                  );
              }
            )}
        </div>
      )
  }
}

export default EpisodeList;
