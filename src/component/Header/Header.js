import React from 'react';
import "./Header.css";
import logo from "../../images/header.png";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
    return (
        <Navbar sticky="top" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <NavLink to="/">
            <img
              src={logo}
              width="100%"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavLink>
        </Navbar.Brand>{' '}
          Parkzone
            
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/home" className="nav-link">
              My Order
            </NavLink>

            

            <NavLink to="/Help" className="nav-link">
              Help
            </NavLink>

            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About us
            </NavLink>
          </Nav>
          <Nav>
            {
              user.email ? (
                <Nav className="d-flex align-items-center">
                  {/* <NavLink to="/login">
                    <button
                      onClick={logOut}
                      className="btn btn-danger rounded-pill text-white fw-bold"
                    >
                      Logout
                    </button>
                  </NavLink> */}
                  <Navbar.Text className="text-center d-flex align-items-center">
                    <Image style={{width:"40px"}} src={user.photoURL} roundedCircle />
                    <br />
                    <NavDropdown title={user.displayName} id="basic-nav-dropdown">
               <NavDropdown.Item href="#action/3.1">
                 <NavLink to="/profile" className="nav-link">
              Profile
            </NavLink>
                </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.2"><NavLink to="/dashboard" className="nav-link">
              Dashboard
            </NavLink></NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3"><NavLink to="/login">
                    <button
                      onClick={logOut}
                      className="btn btn-danger rounded-pill text-white fw-bold"
                    >
                      Logout
                    </button>
                  </NavLink>
                  </NavDropdown.Item>
               
              </NavDropdown>
                  </Navbar.Text>
                </Nav>
              ) : (
                // <button onClick={logOut}>Logout</button>
                <Nav>
                  <NavLink to="/login" className="nav-link btn brdr font-color5">
                    Login
                  </NavLink>

                  <NavLink to="/register" className="nav-link btn brdr font-color5 ms-4">
                    Register
                  </NavLink>
                </Nav>
              )
              // <NavLink to="/register">Register</NavLink>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;