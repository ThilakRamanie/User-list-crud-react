import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav" sticky="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home" className="navLink">
            Users List
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navLinkMenuIcon"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/add-user">
              <Nav.Link className="navLink">Add User</Nav.Link>
            </LinkContainer>
            <div className="d-none d-lg-block">
              <Nav.Link className="navLink">|</Nav.Link>
            </div>
            <LinkContainer to="/">
              <Nav.Link className="navLink" href="#pricing">
                Users
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
