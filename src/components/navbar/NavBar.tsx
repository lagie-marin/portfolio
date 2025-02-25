import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

function NavBar() {
    return <>
        <Navbar collapseOnSelect expand="md" className="custom-navbar navbar-dark fixed-top">
            <Container style={{position: 'relative'}}>
                <Navbar.Brand href="#">Marin LAGIÉ</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto mx-auto">
                        <Nav.Link href="#skill">Compétences</Nav.Link>
                        <Nav.Link href="#school">Étude</Nav.Link>
                        <Nav.Link href="#project">Projets</Nav.Link>
                        <Nav.Link href="#about">A propos</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default NavBar;