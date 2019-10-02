import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import './Episode.css';

class Episode extends Component{
  constructor(props){
    super(props);
  }

  render(props){
      return(
        <div className="episode">
          <Image src={this.props.image} rounded fluid/>
        </div>
      );
  }
}

Episode.propTypes = {
  image: PropTypes.string,
}

export default Episode;
