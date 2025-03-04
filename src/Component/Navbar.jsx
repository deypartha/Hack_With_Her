import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CustomNavbar() {
  const location = useLocation(); // Get the current page path

  return (
    <header className="w-100">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
            SafeHaven <span className="text-warning">🛡️</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-3">
              <Nav.Link as={Link} to="/" className={location.pathname === "/" ? "active" : ""}>
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/about" className={location.pathname === "/about" ? "active" : ""}>
                About us
              </Nav.Link>

              <NavDropdown title="Resources" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/stories" className={location.pathname === "/stories" ? "active" : ""}>
                  Real Story
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/safety_tips" className={location.pathname === "/safety_tips" ? "active" : ""}>
                  Safety Tips
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/emergency-contacts" className={location.pathname === "/emergency-contacts" ? "active" : ""}>
                  Emergency Contacts
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                Contact Us
              </Nav.Link>

              <Nav.Link as={Link} to="/map" className={location.pathname === "/map" ? "active" : ""}>
                Map
              </Nav.Link>

              <Nav.Link as={Link} to="/login" id="login" className={location.pathname === "/login" ? "active" : ""}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
