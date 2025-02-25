import { Box, Image, Text, VStack } from "@chakra-ui/react";
import styles from './SchoolCard.module.css';

interface CardProps {
    id: string;
    className: string
    smallImage: string;
    schoolImage: string;
    title: string;
    description: string;
    actual: boolean;
}

const SchoolCard: React.FC<CardProps> = ({ id, className, smallImage, schoolImage, title, description, actual}) => {
    return <>
        <Box className={`${styles.schoolCard} ${className}`} id={id}>
            {actual && (
                <Box className={styles.actualIndicator} />
            )}
            <div className={styles.schoolCard} style={{overflow: "hidden"}}>
                <VStack align="start" gap={2} flex={1} p={4}>
                    <Image src={smallImage} alt="small" w={"40%"} h={"40%"} objectFit="cover" borderRadius="md" />
                    <Text fontWeight="bold" fontSize="lg" _dark={{ color: "white" }}>{title}</Text>
                    <Text fontSize="md" _dark={{ color: "gray.400" }} textAlign="left">{description}</Text>
                </VStack>
                <Image src={schoolImage} alt="school" w="50%" h="full" objectFit="cover" borderRadius="md" />
            </div>
        </Box>
    </>;
};

export default SchoolCard;