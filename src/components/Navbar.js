import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { AiFillCodeSandboxCircle } from "react-icons/ai";


const NavbarComponent = ()=> {
  return(
    <Navbar expand="lg" data-bs-theme="dark" className="App">
      <Container>
        <Navbar.Brand href="/" className='fw-semibold d-flex align-items-center gap-2 text-light'>
          <AiFillCodeSandboxCircle className='display-6'/>
          Denierose
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto p-2">
            <Nav.Link >
              <Link to="/" className='text-decoration-none text-light'>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/work" className='text-decoration-none text-light'>Work</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/education" className='text-decoration-none text-light'>Education</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

  )
}
export default NavbarComponent;