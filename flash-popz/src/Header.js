import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import Navbar from './NavBar';

class Header extends Component{

  render(props){
      return(
        <div className="header">
          <div className="row-wrapper">
            <div className="speech-wrapper">
              <div className="speech-bubble">
                <h1>FlashPopz</h1>
              </div>
            </div>
            <Navbar/>
          </div>
          <hr/>
        </div>
      )
  }
}

export default Header;
