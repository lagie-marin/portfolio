import React from 'react';
import { Box } from "../content/Box";
import Skills from "../content/Skills";
import './home.css';
import SchoolLife from '../content/SchoolLife';
import { Project } from '../content/Project';

const Home: React.FC = () => {
    return (
        <MainContent />
    );
};

function MainContent() {
    return <>
        <div className="box-container">
            <Box id="content-2" title="Mes compétences" titleClass="title">
                <Skills />
            </Box>
            <Box id="content-3" title="Études" titleClass="sub-sub-title">
                <SchoolLife />
            </Box>
            <Box id="content-5" title="Projets" titleClass="sub-sub-title">
                <Project />
            </Box>
        </div>
    </>
}

export default Home;