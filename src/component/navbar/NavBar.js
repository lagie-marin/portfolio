import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
function NavBar() {
    return _jsx(_Fragment, { children: _jsx(Navbar, { collapseOnSelect: true, expand: "md", className: "bg-body-tertiary", "data-bs-theme": "dark", children: _jsxs(Container, { style: { position: 'relative' }, children: [_jsx(Image, { src: './src/assets/Marin.png', fluid: true, style: { height: "10vh", right: "2vh", position: "relative" } }), _jsx(Navbar.Brand, { href: "", children: "Marin LAGI\u00C9" }), _jsx(Navbar.Toggle, { "aria-controls": "responsive-navbar-nav" }), _jsxs(Navbar.Collapse, { id: "responsive-navbar-nav", children: [_jsxs(Nav, { className: "me-auto", children: [_jsx(Nav.Link, { href: "#about", children: "A propos" }), _jsx(Nav.Link, { href: "#project", children: "Projet" }), _jsx(Nav.Link, { href: "#contact", children: "Contact" })] }), _jsx(Nav, { children: _jsxs(NavDropdown, { title: "Options", id: "settings-nav-dropdown", children: [_jsx(NavDropdown.Item, { href: "#options/parameter", children: "Param\u00E8tre" }), _jsx(NavDropdown.Divider, {}), _jsx(NavDropdown.Item, { href: "#action/login", children: "Connexion" })] }) })] })] }) }) });
}
export default NavBar;
