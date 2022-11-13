
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import './NavbarCompCss.css' 

import {Outlet, Link} from 'react-router-dom';
 

function NavScrollExample() {
  return (
    <>
    <Navbar className='Navbar-custom' variant='dark' expand="lg">
      <Container  fluid >
        <Navbar.Brand as={Link} to="/">Trabajos Voluntarios</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='justify-content-center' id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/SobreNosotros ">Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/Departamentos">Departamentos</Nav.Link>
            <Nav.Link as={Link} to="/InSitu">Trabajos In Situ</Nav.Link>
            <Nav.Link as={Link} to="/">RRSS</Nav.Link>
            <Nav.Link href="#Inscribete">Inscribete</Nav.Link>
             

            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action6">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action7">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action8">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
 
    <section><Outlet/></section>
    </>
      
  );
}

export default NavScrollExample;