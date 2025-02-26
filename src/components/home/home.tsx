import React from 'react';
import { Box } from "../content/Box";
import Skills from "../content/Skills";
import './home.css';
import SchoolLife from '../content/SchoolLife';
import { Project } from '../content/Project';
import { About } from '../content/About';
import NavBar from '../navbar/NavBar';
import { Me } from '../content/me';

const Home: React.FC = () => {
    return <>
        <NavBar />
        <MainContent />
    </>
    
};

function MainContent() {
    return <>
        <div className="box-container">
            <Box id="me" className="primary">
                <Me />
            </Box>
            <Box id="skill" title="Mes compétences" titleClass="title" className="primary">
                <Skills />
            </Box>
            <Box id="school" title="Études" titleClass="sub-sub-title" className="primary">
                <SchoolLife />
            </Box>
            <Box id="project" title="Projets" titleClass="sub-sub-title" className="primary">
                <Project />
            </Box>
            <Box id="about" title="À propos" titleClass="sub-sub-title" className="primary">
                <About />
            </Box>
        </div>
    </>
}

export default Home;