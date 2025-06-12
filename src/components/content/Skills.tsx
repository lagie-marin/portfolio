import { useState } from "react";
import skillsDataJson from "../../config/skillsData.json"
import { Button } from "@chakra-ui/react";
import { useLanguage } from '@/config/langage';

// Types mis à jour pour refléter la structure multilingue
type SkillCategory = {
    fr: string;
    en: string;
    id: string;
    skills: string[];
};

type SkillsData = {
    DefaultCategory: string;
    Categories: {
        [key: string]: SkillCategory;
    }
}

function Skills() {
    const skillsData = skillsDataJson as SkillsData;
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const { language } = useLanguage();

    const handleCategoryClick = (category: string) => {
        setActiveButton(category);
        setSelectedCategory(category);
    };

    // Initialiser avec la catégorie par défaut
    if (!selectedCategory && skillsData.DefaultCategory) {
        handleCategoryClick(skillsData.DefaultCategory);
    }

    return (
        <div className="item" style={{ width: "10vh" }}>
            <div style={{ display: 'flex', gap: '0.2vh', flexWrap: 'wrap', justifyContent: "center" }}>
                {Object.keys(skillsData.Categories).map((categoryKey) => {
                    const category = skillsData.Categories[categoryKey];
                    // Utiliser le nom localisé pour l'affichage
                    const localizedName = language === 'fr' ? category.fr : category.en;
                    
                    return (
                        <Button 
                            key={categoryKey}
                            id={categoryKey}
                            className={`skills-type text ${categoryKey === activeButton ? "is-active" : ""}`}
                            onClick={() => handleCategoryClick(categoryKey)}
                        >
                            {localizedName}
                        </Button>
                    );
                })}
            </div>
            <div>
                {selectedCategory && skillsData.Categories[selectedCategory] && (
                    <div>
                        <h3 className="sub-title">
                            {language === 'fr' 
                                ? skillsData.Categories[selectedCategory].fr 
                                : skillsData.Categories[selectedCategory].en
                            }
                        </h3>
                        <div 
                            id={skillsData.Categories[selectedCategory].id} 
                            key={selectedCategory}
                            style={{ display: 'flex', gap: '0.2vh', flexWrap: 'wrap', justifyContent: "center" }}
                        >
                            {skillsData.Categories[selectedCategory].skills.map((skill, index) => (
                                <div className="skills-element text" key={index}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Skills;