import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Images/logo.svg";
import {  NavLink } from 'react-router-dom';

function AppNav(props) {
  return (
    <div>
      <Navbar bg="white" variant="light"  fixed="top">
        <Container >
          <NavLink to={'/'}>
            <Navbar.Brand>
            <img src={logo} className="Img" />
          </Navbar.Brand>
          </NavLink>
          <Nav className=" ">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/Service">Service</NavLink>
            <NavLink className="nav-link" to="/ServiceArea">Service Areas</NavLink>
            <NavLink className="nav-link" to="/BecomeMember">Become A Member</NavLink>
            <NavLink className="nav-link" to="/Blog">Blog</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNav;