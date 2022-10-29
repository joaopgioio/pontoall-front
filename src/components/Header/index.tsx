import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logopequeno.png"
            width="100"
            height="70"
            className="d-inline-block align-top img-fluid"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/sobre-nos">Sobre nós</Nav.Link>
          <NavDropdown title="Sistema" id="basic-nav-dropdown">
            <NavDropdown.Item href="/professores">Professores</NavDropdown.Item>
            <NavDropdown.Item href="/cadastrar-professor">
              Cadastrar Professor
            </NavDropdown.Item>
            <NavDropdown.Item href="/registrar-ponto">
              Registrar Ponto
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
