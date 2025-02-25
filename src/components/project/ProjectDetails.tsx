import { useEffect, useState } from 'react';
import { Badge, Button, Stack, Text } from "@chakra-ui/react";
import Carousel from 'react-bootstrap/Carousel';
import './projectDetails.css';

interface ProjectDetailsProps {
    project: {
        key: string;
        links: string | null;
        description: string;
        type_project: string;
        groupe: string | null;
        languages: string[];
        img: string;
        carousel: string[];
    };
    onClose: () => void;
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

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
    const [show, setShow] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        setShow(true);
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY);
        document.body.style.position = 'fixed';
        document.body.style.top = `-${currentScrollY}px`;
        document.body.style.width = '100%';

        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, currentScrollY);
        };
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300); // Match the transition duration
    };

    return (
        <div className={`projectDetails ${show ? 'show' : ''} ${isClosing ? 'hide' : ''}`} style={{ top: `${scrollY}px` }}>
            <Button className="closeButton" onClick={handleClose}>X</Button>
            <Text className="projectTitle">{project.key}</Text>
            <Stack direction="row">
                <Badge variant="solid" colorPalette={getColorByType(project.type_project)}>{project.type_project}</Badge>
            </Stack>
            <Carousel>
                {project.carousel.map((img: string) => (
                    <Carousel.Item>
                        <img className="d-block w-100" src={img} alt={img}></img>
                    </Carousel.Item>
                ))}
            </Carousel>
            <Text className="projectDescription">
                <Text>Description:</Text>
                <div dangerouslySetInnerHTML={{ __html: project.description }} />
            </Text>
        </div>
    );
}