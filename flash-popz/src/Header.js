import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class Header extends Component{
  constructor(props) {
    super(props);
  }

  render(props){
      return(
        <div className="header">
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="/home">
              <div className="speech-wrapper">
                <div className="speech-bubble">
                  <h1 className="title">FlashPopz</h1>
                </div>
            </div></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/episode">Practice</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Form inline className="search">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.props.handleSearch}/>
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar>
        </div>
      )
  }
}

Header.propTypes = {
  handleSearch: PropTypes.func,
}

export default Header;
