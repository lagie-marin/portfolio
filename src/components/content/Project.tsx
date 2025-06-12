import { useState, useEffect } from 'react';
import { Badge, Button, Card, CloseButton, DrawerActionTrigger, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerHeader, DrawerRoot, DrawerTitle, DrawerTrigger, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Box } from "./Box";
import "./project.css";
import "../../css/card.style.css";
import projectDataJson from "../../config/projectsData.json";
import { Carousel } from "react-bootstrap";
import { useLanguage } from '@/config/langage';

// Mise à jour de l'interface pour refléter la structure multilingue
interface ProjectTranslation {
    desc_btn: string | null;
    description: string;
}

interface ProjectData {
    [key: string]: {
        links: string;
        fr: ProjectTranslation;
        en: ProjectTranslation;
        type_project: string;
        groupe: string | null;
        languages: string[];
        img: string;
        carousel: string[];
    }
}

export const getColorByType = (type: string) => {
    switch (type) {
        case 'Perso':
            return 'teal';
        case 'Epitech':
            return 'blue';
        case 'Nouveau':
            return 'orange';
        default:
            return 'gray';
    }
};

export function Project() {
    const projectData: ProjectData = projectDataJson;
    const [drawerTop, setDrawerTop] = useState(0);
    const { t, language } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setDrawerTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box id="content-6" title={t("me.projects")} titleClass='title' className="project" titleStyle={{color: "white"}} style={{ alignItems: "center" }}>
            <Text className="text-normal">{t("project.discover")}</Text>
            <div className="cardContainer" style={{ display: "flex", gap: "4vh", flexWrap: "wrap", justifyContent: "center" }}>
                {Object.keys(projectData).map(name => {
                    const project = projectData[name];
                    const localizedData = project[language] || project.fr;
                    
                    return (
                        <Card.Root key={name} className="cardElement" maxW="sm" overflow="hidden">
                            <Image src={project.img} alt={name} className="cardImage" />
                            <Card.Body className="cardBody">
                                <Stack direction="row">
                                    <Badge size="md" variant="solid" colorPalette={getColorByType(project.type_project)}>{project.type_project}</Badge>
                                </Stack>
                                <Card.Title style={{ color: "white" }}>{name}</Card.Title>
                                <HStack wrap="wrap" className="buttonContainer">
                                    <DrawerRoot key={`drawer-${name}`} size="md">
                                        <DrawerTrigger asChild>
                                            <Button size="sm" className="visible-button">
                                                {t("project.view")}
                                            </Button>
                                        </DrawerTrigger>
                                        <DrawerContent className="drower" style={{top: `calc(${drawerTop}px - 2vh)`}}>
                                            <DrawerHeader>
                                                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                                                    <DrawerTitle color="white">{name}</DrawerTitle>
                                                    <DrawerActionTrigger asChild>
                                                        <CloseButton variant="solid" style={{top: "1vh"}} />
                                                    </DrawerActionTrigger>
                                                </div>
                                                <Stack direction="row">
                                                    <Badge variant="solid" colorPalette={getColorByType(project.type_project)}>{project.type_project}</Badge>
                                                </Stack>
                                            </DrawerHeader>
                                            <DrawerBody>
                                                <Carousel>
                                                    {project.carousel.map((img: string, index: number) => (
                                                        <Carousel.Item key={`carousel-${name}-${index}`}>
                                                            <img className="d-block w-100 carousel-image" src={img} alt={img} />
                                                        </Carousel.Item>
                                                    ))}
                                                </Carousel>
                                                {
                                                    project.links !== "" && localizedData.desc_btn &&
                                                    (<Button size="sm" className="visible-button w-100" onClick={() => window.open(project.links, '_blank')}>
                                                        {localizedData.desc_btn}
                                                    </Button>)
                                                }
                                                <Box id="projectDescription" className="projectDescription" style={{ color: "white" }}>
                                                    <Text fontWeight="bold">{t("project.description")}</Text>
                                                    <div dangerouslySetInnerHTML={{ __html: localizedData.description }} />
                                                </Box>
                                            </DrawerBody>
                                            <DrawerCloseTrigger />
                                        </DrawerContent>
                                    </DrawerRoot>
                                </HStack>
                            </Card.Body>
                        </Card.Root>
                    )
                })}
            </div>
        </Box>
    );
}