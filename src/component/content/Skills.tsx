import { useState } from "react";
import skillsDataJson from "../../config/skillsData.json"
import { Button } from "../form/Button";

type SkillCategory = {
    id: string;
    skills: string[];
};

type SkillsData = {
    [key: string]: string | SkillCategory;
}

function Skills()
{
    const skillsData: SkillsData = skillsDataJson;
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [activeButton, setActiveButton] = useState<string | null>(null);

    const handleCategoryClick = (category: string) => {
        setActiveButton(category);
        setSelectedCategory(category);
    };
    const isSkillCategory = (value: any): value is SkillCategory => {
        return value && typeof value === "object" && "id" in value && "skills" in value;
    }

    if (!selectedCategory && typeof skillsData["Default"] === "string" && skillsData["Default"] in skillsData)
        handleCategoryClick(skillsData["Default"]);
    return (
        <div className="item" style={{ width: "10vh" }}>
            <div style={{ display: 'flex', gap: '0.2vh', flexWrap: 'wrap', justifyContent: "center" }}>
                {Object.keys(skillsData).map((category, index) => (
                    category !== 'Default' && (
                        <Button key={index} id={category} className={`skills-type ${category == activeButton ? "is-active" : ""}`} onClick={() => handleCategoryClick(category)}>{category}</Button>
                    )
                ))}
            </div>
            <div>
                {selectedCategory && isSkillCategory(skillsData[selectedCategory]) && (
                    <div>
                        <h3>{selectedCategory}</h3>
                        <div id={skillsData[selectedCategory].id} key={selectedCategory} style={{ display: 'flex', gap: '0.2vh', flexWrap: 'wrap', justifyContent: "center" }}>
                            {skillsData[selectedCategory].skills.map((skill, index) => (
                                <div className="skills-element" key={index}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills;