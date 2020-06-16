import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar className='sticky-top' bg='light' expand='lg'>
        <Navbar.Brand href='#home'>Andrew T. Lim</Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav '>
          <Nav className='ml-auto'>
            <Nav.Item>
              <Nav.Link href='#'>Home</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
                <Nav.Link href='#about'>About</Nav.Link>
              </Nav.Item> */}
            <Nav.Item>
              <Nav.Link href='https://bit.ly/37Ug3qQ'>Resume</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
                <Nav.Link href='#contact'>Contact</Nav.Link>
              </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
