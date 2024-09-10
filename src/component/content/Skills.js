import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import skillsDataJson from "../../config/skillsData.json";
import { Button } from "../form/Button";
function Skills() {
    const skillsData = skillsDataJson;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeButton, setActiveButton] = useState(null);
    const handleCategoryClick = (category) => {
        setActiveButton(category);
        setSelectedCategory(category);
    };
    const isSkillCategory = (value) => {
        return value && typeof value === "object" && "id" in value && "skills" in value;
    };
    if (!selectedCategory && typeof skillsData["Default"] === "string" && skillsData["Default"] in skillsData)
        handleCategoryClick(skillsData["Default"]);
    return (_jsxs("div", { className: "item", style: { width: "10vh" }, children: [_jsx("div", { style: { display: 'flex', gap: '0.2vh', flexWrap: 'wrap' }, children: Object.keys(skillsData).map((category, index) => (category !== 'Default' && (_jsx(Button, { id: category, className: `skills-type ${category == activeButton ? "is-active" : ""}`, onClick: () => handleCategoryClick(category), children: category }, index)))) }), _jsx("div", { children: selectedCategory && isSkillCategory(skillsData[selectedCategory]) && (_jsxs("div", { children: [_jsx("h3", { children: selectedCategory }), _jsx("div", { id: skillsData[selectedCategory].id, style: { display: 'flex', gap: '0.2vh', flexWrap: 'wrap' }, children: skillsData[selectedCategory].skills.map((skill, index) => (_jsx("div", { className: "skills-element", children: skill }, index))) }, selectedCategory)] })) })] }));
}
;
export default Skills;
