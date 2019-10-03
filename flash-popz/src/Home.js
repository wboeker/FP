import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import Show from './Show';

class Home extends Component{
  constructor(props) {
    super(props);
  }

  render(props){
    let searchVal = this.props.searchVal;
    let shows = [{name: "Death Note", image: "deathnote.jpg"}, {name: "7 Seeds", image: "7seeds.jpg"},
    {name: "Aggretsuko", image: "aggretsuko.jpg"}, {name: "A Silent Voice", image: "asilentvoice.jpg"},
    {name: "Attack on Titan", image: "attackontitan.jpg"}, {name: "Blue Exorcist", image: "blueexorcist.jpg"},
    {name: "Pokemon", image: "pokemon.jpg"}, {name: "Code Geass", image: "codegeass.jpg"},
    {name: "Hunter x Hunter", image: "hunterxhunter.jpg"}, {name: "Ouran High School Host Club", image: "ouranhostclub.jpg"},
    {name: "Bleach", image: "bleach.jpg"}, {name: "Vampire Knight", image: "vampireknight.jpg"}];
    let filteredShows = shows.filter(function(show){
      return show.name.toLowerCase().includes(searchVal.toLowerCase());
    });
      return(
        <div className="home">
          {filteredShows.map((show) =>
            {
                return(
                    <a href="/list">
                      <Show image={show.image}/>
                    </a>
                );
            }
          )}
        </div>
      )
  }
}

Home.propTypes = {
  searchVal: PropTypes.string,
}

export default Home;
