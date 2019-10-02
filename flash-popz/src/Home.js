import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import Show from './Show';

class Home extends Component{

  render(props){
    let showImages = ["deathnote.jpg", "7seeds.jpg", "aggretsuko.jpg", "asilentvoice.jpg", "attackontitan.jpg",
  "blueexorcist.jpg", "pokemon.jpg", "codegeass.jpg", "hunterxhunter.jpg", "ouranhostclub.jpg", "bleach.jpg",
"vampireknight.jpg"];
      return(
        <div className="home">
          {showImages.map((image) =>
            {
                return(
                    <a href="/list">
                      <Show image={image}/>
                    </a>
                );
            }
          )}
        </div>
      )
  }
}

export default Home;
