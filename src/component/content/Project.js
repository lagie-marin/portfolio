import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import projectsDataJson from "../../config/projectsData.json";
import { Button } from "../form/Button";
export function Project() {
    const projectsData = projectsDataJson;
    const handleClick = (link) => {
        if (link !== null && link !== "En Maintenance") {
            window.open(link);
        }
    };
    return _jsx(_Fragment, { children: _jsxs("div", { id: "project", className: "project-box", children: [_jsx("h3", { children: "Mes projets" }), _jsx("div", { style: { display: "flex", gap: "1vh", flexWrap: "wrap", justifyContent: "center" }, children: Object.keys(projectsData).map((name, index) => {
                        const project = projectsData[name];
                        return (_jsxs("div", { className: "project-card", children: [_jsx("h4", { children: name }), _jsx("p", { style: { padding: "0vh .1vh" }, children: project.description }), _jsx("span", { className: "card type-project", children: project.type_project }), _jsx("div", { className: "list-language", children: project.languages.map((name, index) => (_jsx("span", { className: "card", children: name }, index))) }), _jsx(Button, { id: name, className: `btn-project ${!project.links ? "disabled-button" : "project-type"}`, onClick: () => handleClick(project.links), disabled: project.links_title === "En Maintenance", children: project.links_title })] }, index));
                    }) })] }) });
}
