import { Box } from "./component/content/Box";
import { Project } from "./component/content/Project";
import Skills from "./component/content/Skills";
import NavBar from "./component/navbar/NavBar";

function App() {
    return <>
        <NavBar />
        <div className="bg-img">
            <MainContent />
        </div>
    </>
}

function MainContent() {
    return <>
        <div className="box-container container scrollable">
            <About />
            <Projects />
        </div>
    </>
}

function About() {
    return <>
        <div id="about">
            <Box id="about-box" title="A propos de moi" titleClass="title-about" titleStyle={{ position: "relative", fontSize: "4vh", fontWeight: "500", width: "auto", marginLeft: "5vh", marginRight: "5vh" }}>
            </Box>
            <Box id="content-info" style={{ height: "60%", marginLeft: "5vh", marginRight: "5vh" }}>
                <Box id="content-1" title="Apprendre à me connaître" titleClass="sub-title">
                    <Box.Description id="know-me" className="text">
                        <p>
                            Je m'appelle Marin Lagie, passionné par l'informatique depuis la 4e. J'ai réalisé différents types de
                            projets, tels que des plugins, des mods et des launchers pour Minecraft, ainsi que du développement de
                            jeux vidéo, de sites web et de bots Discord. Actuellement en 2e année d'études en informatique à Epitech,
                            je continue à explorer ces domaines avec enthousiasme.
                        </p>
                        <p>
                            Ce qui me motive particulièrement, c'est de voir l'évolution des projets sur lesquels je travaille, que
                            ce soit côté front-end ou back-end. Mon ambition est de collaborer avec des entreprises innovantes qui
                            partagent cette même passion pour le développement technologique.
                        </p>
                        <p>
                            Je suis ouvert à toute opportunité où je pourrais contribuer, apprendre et évoluer. Je vous apporterai
                            mes connaissances dans les technologies les plus récentes. Si vous avez une offre correspondant à mon
                            profil, je pourrai certainement mettre à votre disposition mes compétences et à mes expériences,
                            n'hésitez pas à me contacter.
                        </p>
                    </Box.Description>
                </Box>
                <Box id="content-2" title="Mes compétences" titleClass="sub-title">
                    <Skills />
                </Box>
            </Box>
        </div>
    </>
}

function Projects() {
    return <>
        <Project />
    </>
}

export default App;