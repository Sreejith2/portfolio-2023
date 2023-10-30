import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand className='brand' href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='link' href="/">Home</Nav.Link>
            <Nav.Link className='link' href="#project">Projects</Nav.Link>
            <Nav.Link className='link' href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;