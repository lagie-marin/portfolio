import React from 'react';
import { Box } from "../content/Box";
import Skills from "../content/Skills";
import './home.css';
import SchoolLife from '../content/SchoolLife';
import { Project } from '../content/Project';
import { About } from '../content/About';
import NavBar from '../navbar/NavBar';
import { Me } from '../content/me';
import { useLanguage } from '@/config/langage';

const Home: React.FC = () => {
    return <>
        <NavBar />
        <MainContent />
    </>
    
};

function MainContent() {
    const {t} = useLanguage();
    return <>
        <div className="box-container">
            <section id="me">
                <Box id="me-box" className="primary">
                    <Me />
                </Box>
            </section>
            <section id="skill">
                <Box id="skill-box" title={t("main.skills")} titleClass="title" className="primary">
                    <Skills />
                </Box>
            </section>
            <section id="school">
                <Box id="school-box" title={t("nav.education")} titleClass="sub-sub-title" className="primary">
                    <SchoolLife />
                </Box>
            </section>
            <section id="project">
                <Box id="project-box" title={t("nav.projects")} titleClass="sub-sub-title" className="primary">
                    <Project />
                </Box>
            </section>
            <section id="about">
                <Box id="about-box" title={t("nav.about")} titleClass="sub-sub-title" className="primary">
                    <About />
                </Box>
            </section>
        </div>
    </>
}

export default Home;