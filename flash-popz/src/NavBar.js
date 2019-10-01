import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './NavBar.css';

function NavBar() {
  return (
    <div className="nav-bar">
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Options
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/">Home</Dropdown.Item>
          <Dropdown.Item href="/list">About</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default NavBar;
