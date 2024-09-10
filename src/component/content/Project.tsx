import projectsDataJson from "../../config/projectsData.json"
import { Button } from "../form/Button";

type ProjectElement = {
    links: string | null;
    links_title: string;
    description: string;
    type_project: string;
    languages: string[];
}
type ProjectsData = {
    [key: string]: ProjectElement;
}

export function Project() {
    const projectsData: ProjectsData = projectsDataJson;
    const handleClick = (link: string | null) => {
        if (link !== null && link !== "En Maintenance") {
            window.open(link);
        }
    }
    return <>
        <div className="project-box">
            <h3>Mes projets</h3>
            <div style={{ display: "flex", gap: "1vh", flexWrap: "wrap", justifyContent: "center"}}>
                {Object.keys(projectsData).map((name, index) => {
                    const project = projectsData[name];
                    return (
                        <div key={index} className="project-card">
                            <h4>{name}</h4>
                            <p style={{padding: "0vh .1vh"}}>{project.description}</p>
                            <span className={`card ${project.type_project}`}>{project.type_project}</span>
                            <div style={{ display: 'flex', gap: '0.2vh', flexWrap: 'wrap', justifyContent: 'center' }}>
                                {
                                    project.languages.map((name, index) => (
                                        <span className={`card ${name}`} key={index}>{name}</span>
                                    ))
                                }
                            </div>
                            <Button id={name} className={`btn-project ${!project.links ? "disabled-button" : "project-type"}`} onClick={() => handleClick(project.links)} disabled={project.links_title === "En Maintenance"}>
                                {project.links_title}
                            </Button>
                        </div>
                    );
                })}
            </div>
        </div>
    </>
}