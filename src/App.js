import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "./component/content/Box";
import { Project } from "./component/content/Project";
import Skills from "./component/content/Skills";
import NavBar from "./component/navbar/NavBar";
function App() {
    return _jsxs(_Fragment, { children: [_jsx(NavBar, {}), _jsx("div", { className: "bg-img", children: _jsx(MainContent, {}) })] });
}
function MainContent() {
    return _jsx(_Fragment, { children: _jsxs("div", { className: "box-container container scrollable", children: [_jsx(About, {}), _jsx(Projects, {})] }) });
}
function About() {
    return _jsx(_Fragment, { children: _jsxs("div", { id: "about", children: [_jsx(Box, { id: "about-box", title: "A propos de moi", titleClass: "title-about", titleStyle: { position: "relative", fontSize: "4vh", fontWeight: "500", width: "auto", marginLeft: "5vh", marginRight: "5vh" } }), _jsxs(Box, { id: "content-info", style: { height: "60%", marginLeft: "5vh", marginRight: "5vh" }, children: [_jsx(Box, { id: "content-1", title: "Apprendre \u00E0 me conna\u00EEtre", titleClass: "sub-title", children: _jsxs(Box.Description, { id: "know-me", className: "text", children: [_jsx("p", { children: "Je m'appelle Marin Lagie, passionn\u00E9 par l'informatique depuis la 4e. J'ai r\u00E9alis\u00E9 diff\u00E9rents types de projets, tels que des plugins, des mods et des launchers pour Minecraft, ainsi que du d\u00E9veloppement de jeux vid\u00E9o, de sites web et de bots Discord. Actuellement en 2e ann\u00E9e d'\u00E9tudes en informatique \u00E0 Epitech, je continue \u00E0 explorer ces domaines avec enthousiasme." }), _jsx("p", { children: "Ce qui me motive particuli\u00E8rement, c'est de voir l'\u00E9volution des projets sur lesquels je travaille, que ce soit c\u00F4t\u00E9 front-end ou back-end. Mon ambition est de collaborer avec des entreprises innovantes qui partagent cette m\u00EAme passion pour le d\u00E9veloppement technologique." }), _jsx("p", { children: "Je suis ouvert \u00E0 toute opportunit\u00E9 o\u00F9 je pourrais contribuer, apprendre et \u00E9voluer. Si vous avez une offre correspondant \u00E0 mes comp\u00E9tences et \u00E0 mes exp\u00E9riences, n'h\u00E9sitez pas \u00E0 me contacter." })] }) }), _jsx(Box, { id: "content-2", title: "Mes comp\u00E9tences", titleClass: "sub-title", children: _jsx(Skills, {}) })] })] }) });
}
function Projects() {
    return _jsx(_Fragment, { children: _jsx(Project, {}) });
}
export default App;
