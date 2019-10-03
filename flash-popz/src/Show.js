import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import './Show.css';

class Show extends Component{
  constructor(props){
    super(props);
  }

  render(props){
      return(
        <div className="show">
          <Image src={this.props.image} rounded fluid/>
        </div>
      );
  }
}

Show.propTypes = {
  image: PropTypes.string,
}

export default Show;
