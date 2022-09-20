
import {Button, Container, Form,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import './NavbarCompCss.css' 


function NavScrollExample() {
  return (
    <Navbar className='Navbar-custom' variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Trabajos Voluntarios</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#action2">Departamentos</Nav.Link>
            <Nav.Link href="#action3">Trabajos In Situ</Nav.Link>
            <Nav.Link href="#action4">RRSS</Nav.Link>
            <Nav.Link href="#action5">Inscribete</Nav.Link>

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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;