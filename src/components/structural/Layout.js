import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";


function Layout(props) {

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">

                        Chloe Foor
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>

                        <Nav.Link as={Link} to="/thesis">My Thesis</Nav.Link>

                        <Nav.Link as={Link} to="/awardshonors">Awards & Honors</Nav.Link>

                        <NavDropdown title="School Work">

                            <NavDropdown.Item as={Link} to={`/schoolwork/history`}>History</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/schoolwork/computerinfoscience`}>Computer & Information Science</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/schoolwork/involvement`}>Involvement</NavDropdown.Item>

                        </NavDropdown>

                        <NavDropdown title="Career History">

                            <NavDropdown.Item as={Link} to={`/careers/dchs`}>Dane County Historical Society</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/careers/wes`}>Wisconsin Emerging Scholars in CS</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/careers/studenthistorian`}>Student Historian</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/careers/nvp`}>The Nonviolence Project</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/careers/hiah`}>Historic Indian Agency House</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/careers/sentry`}>Sentry Insurance</NavDropdown.Item>

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

export default Layout;