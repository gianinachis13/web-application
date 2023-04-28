import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

export default (props) => {
  const { resetGame } = props;
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Airplanes Game</a>
        </Navbar.Brand>
      </Navbar.Header>

      <Nav>
        <NavItem onClick={() => resetGame()}>
          Restart
        </NavItem>
      </Nav>

    </Navbar>
  )
}
