import { Box } from './Box';
import "./about.css";

export function About() {
    return (
        <Box id="content-8" title="Qui suis-je?" titleStyle={{color: "white"}} className="title">
            <div>
                <div className="info-container">
                    <div className="info-item">
                        <strong className="text-normal">Nom</strong>
                        <p className="text-normal">Marin Lagie</p>
                    </div>
                    <div className="info-item">
                        <strong className="text-normal">Âge</strong>
                        <p className="text-normal">25 ans</p>
                    </div>
                    <div className="info-item">
                        <strong className="text-normal">Localisation</strong>
                        <p className="text-normal">Paris, France</p>
                    </div>
                </div>
                <div className="text-normal about-me">
                    <p>
                        Le ski est l'une de mes passions, me permettant de ressentir la liberté en glissant sur les pistes, entouré par la nature.
                        J'adore aussi écouter de la musique, qui me transporte dans différents univers et m'aide à me reconnecter avec mes émotions. 
                    </p>
                    <p>
                        C'est en 2018, au collège, que j'ai découvert la programmation en regardant des tutoriels pour développer des plugins Minecraft en Java. J'ai découvert qu'on pouvait créer plein de projets différents. J'ai créé mon premier plugin Minecraft AshGuard qui me permettait de créer un inventaire customisé pour des interactions spécifiques et de gérer les accès au serveur.
                    </p>
                    <p>
                        En 3e, fais un projet en C# sur Unity pour créer une map à génération procédurale avec un système de chunk pour gérer les éléments de la map.
                    </p>
                    <p>
                        En 1ère j'ai développé un bot discord en Node.js qui permet de gérer les recrutements et la gestion de projet sur GitHub avec un système de connexion.
                    </p>
                    <p>
                        Aujourd'hui étudiant à Epitech, je me perfectionne dans la création d'application et de site, alliant passion et rigueur pour créer des projets de qualité.
                    </p>
                </div>
            </div>
        </Box>
    );
}