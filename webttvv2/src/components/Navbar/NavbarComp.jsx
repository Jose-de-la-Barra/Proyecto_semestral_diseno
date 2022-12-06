
import {Container,Nav,Navbar,} from 'react-bootstrap';
import './NavbarCompCss.css' 

import Footers from './Footers.jsx';
import {Outlet, Link} from 'react-router-dom';
 

function NavbarComp() {
  return (
    <>
    <Navbar className='Navbar-custom' variant='dark' expand="lg">
      <Container  fluid >
        <Navbar.Brand as={Link} to="/Inicio">Trabajos Voluntarios</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='justify-content-center' id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/Inicio">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/Departamentos">Departamentos</Nav.Link>
            <Nav.Link as={Link} to="/InSitu">Trabajos In Situ</Nav.Link>
            <Nav.Link as={Link} to="/Inscripciones">Inscribete</Nav.Link>
            {/*<Nav.Link as={Link} to="/">RRSS</Nav.Link>            */}
            <Nav.Link href="#" disabled>
              Inscribete
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
 
    <section>
      <Outlet>
      </Outlet>     
    </section>
    


    
    </>
      
  );
}

export default NavbarComp;