import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";


function BadgerLayout(props) {
    
    return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            
                            BadgerChat
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <NavDropdown title="Chatrooms">
                                {
                                    <NavDropdown.Item as={Link} to={`chatrooms/yas`}>Yas</NavDropdown.Item>
                                }
                            </NavDropdown>

                        </Nav>
                    </Container>
                </Navbar>
                <div className="body-spacer">
                    <Outlet />
                </div>
            </div>
    );
}

export default BadgerLayout;