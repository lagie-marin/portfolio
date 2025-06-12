import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { Contact } from '../contact/Contact';
import { LanguageSwitcher, useLanguage } from '@/config/langage';

function NavBar() {
    const [activeLink, setActiveLink] = useState('');
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - window.innerHeight / 2 && window.scrollY < sectionTop + sectionHeight - window.innerHeight / 2) {
                    currentSection = section.getAttribute('id') || '';
                }
            });

            setActiveLink(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar collapseOnSelect expand="md" className="custom-navbar navbar-dark fixed-top">
                <Container style={{ position: 'relative' }}>
                    <Navbar.Brand href="#">Marin LAGIÉ</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mx-auto" style={{ border: "1px solid white", borderRadius: "30px" }}>
                            <Nav.Link href="#skill" className={`${activeLink === 'skill' ? 'active-section' : ''}`}>{t("nav.skills")}</Nav.Link>
                            <Nav.Link href="#school" className={`${activeLink === 'school' ? 'active-section' : ''}`}>{t("nav.education")}</Nav.Link>
                            <Nav.Link href="#project" className={`${activeLink === 'project' ? 'active-section' : ''}`}>{t("nav.projects")}</Nav.Link>
                            <Nav.Link href="#about" className={`${activeLink === 'about' ? 'active-section' : ''}`}>{t("nav.about")}</Nav.Link>
                            <Contact className="btn-contact" contentClass="popup-header me-content"/>
                        </Nav>
                        <LanguageSwitcher/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;