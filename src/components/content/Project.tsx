import { useState, useEffect } from 'react';
import { Badge, Button, Card, CloseButton, DrawerActionTrigger, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerHeader, DrawerRoot, DrawerTitle, DrawerTrigger, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Box } from "./Box";
import { getColorByType } from "../project/ProjectDetails";
import "./project.css";
import "../../css/card.style.css";
import projectDataJson from "../../config/projectsData.json";
import { Carousel } from "react-bootstrap";

interface ProjectData {
    [key: string]: {
        links: string | null;
        description: string;
        type_project: string;
        groupe: string | null;
        languages: string[];
        img: string;
        carousel: string[];
    }
}

export function Project() {
    const projectData: ProjectData = projectDataJson;
    const [drawerTop, setDrawerTop] = useState(0);

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
        <Box id="content-6" title="Mes projets" titleClass='title' className="project" style={{ alignItems: "center" }}>
            <Text className="text-normal">Découvrez mes derniers projets dans le développement informatique</Text>
            <div className="cardContainer" style={{ display: "flex", gap: "4vh", flexWrap: "wrap", justifyContent: "center" }}>
                {Object.keys(projectData).map(name => {
                    const project = projectData[name];
                    return (
                        <Card.Root key={name} className="cardElement" maxW="sm" overflow="hidden">
                            <Image src={project.img} alt={name} className="cardImage" />
                            <Card.Body>
                                <Stack direction="row">
                                    <Badge size="md" variant="solid" colorPalette={getColorByType(project.type_project)}>{project.type_project}</Badge>
                                </Stack>
                                <Card.Title style={{ color: "white" }}>{name}</Card.Title>
                                <HStack wrap="wrap">
                                    <DrawerRoot key="md" size="md">
                                        <DrawerTrigger asChild>
                                            <Button size="sm" className="visible-button">
                                                Voir le pojet
                                            </Button>
                                        </DrawerTrigger>
                                        <DrawerContent className="drower" style={{top: `calc(${drawerTop}px - 14.0vh)`}}>
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
                                                    {project.carousel.map((img: string) => (
                                                        <Carousel.Item>
                                                        <img className="d-block w-100 carousel-image" src={img} alt={img} />
                                                    </Carousel.Item>
                                                    ))}
                                                </Carousel>
                                                <Text className="projectDescription" color="white">
                                                    <Text fontWeight="bold">Description:</Text>
                                                    <div dangerouslySetInnerHTML={{ __html: project.description }} />
                                                </Text>
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