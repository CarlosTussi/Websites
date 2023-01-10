import { Navbar, Container, NavDropdown, Nav, Stack} from "react-bootstrap";


function Navigation()
{
    return(
           <Navbar expand="md" variant="dark">
                <Container>    
                    <Stack>
                        <Stack direction="horizontal" className="justify-content-between">
                            <Navbar.Brand>Logo</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </Stack>              
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="flex-column">
                                            <Nav.Link href="#home">Home</Nav.Link>
                                            <Nav.Link href="#about">About</Nav.Link>
                                            <NavDropdown title="Dropdown!" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="#item1">Action 1</NavDropdown.Item>
                                                <NavDropdown.Item href="#item2">Action 2</NavDropdown.Item>
                                                <NavDropdown.Item href="#item3">Action 3</NavDropdown.Item>
                                            </NavDropdown>
                                    </Nav>                               
                                </Navbar.Collapse>
                    </Stack>                              
                </Container>
           </Navbar>
    );
}

export default Navigation;