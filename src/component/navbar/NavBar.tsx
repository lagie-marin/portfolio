import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';

function NavBar() {
    return <>
        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary" data-bs-theme="dark">
            <Container style={{position: 'relative'}}>
                <Image src='/Marin.png' fluid style={{height: "10vh", right: "2vh", position: "relative"}}/>
                <Navbar.Brand href="">Marin LAGIÉ</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about">A propos</Nav.Link>
                        <Nav.Link href="#project">Projet</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Options" id="settings-nav-dropdown">
                            <NavDropdown.Item href="#options/parameter">Paramètre</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/login">Connexion</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default NavBar;