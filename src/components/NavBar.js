import { useState } from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import githubIcon from '../assets/img/Github.svg'; 
import linkedInIcon from '../assets/img/Linkedin.svg'; 
// import starIcon from '../assets/img.star-icon'; 
// import moonIcon from '../assets/img.moon-icon'; 
import { BiSolidMoon } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import folderLogo from '../assets/img/my-logos/folder-logo.svg'; 

function NavBar() {
  // TODO -- implement dark mode 
  // TODO -- make nav bar hover while you scroll
  const [darkMode, setDarkMode] = useState(false); 
  return (
    
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={folderLogo} alt="my logo!" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto source-code-pro-medium" style={{fontSize: '18px' }}>
            <Nav.Link className="tabs" href="#">&lt;home/&gt;</Nav.Link> {/* this is the about me part */}
            <Nav.Link className="tabs" href="#projects">&lt;projects/&gt;</Nav.Link>
            <Nav.Link className="tabs" href="#skills">&lt;skills/&gt;</Nav.Link>
            {/* maybe make projects a dropdown */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <div className="social-icon">
            <a href="https://github.com/jennahshah" >
                <img src={githubIcon} alt="github-icon" /> 
            </a>
            <a href="https://www.linkedin.com/in/jennah-shah-902a73b8/" >
                <img src={linkedInIcon} alt="linkedin-icon" />
            </a>
            {/* connect with me button */}
          </div>
          <button className='connect-button source-code-pro-semibold' onClick={() => console.log("connect with me function!")}> 
              <span >&lt;connect with me/&gt;</span>
          </button>
          {/* TODO -- add dark mode */}
          <div className="dark-light-icon">
            <a href="" onClick={() => darkMode ? console.log("dark mode"): console.log("light mode")}>
              {darkMode ? <BiStar/> : <BiSolidMoon/>}
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
