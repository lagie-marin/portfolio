import { Text } from "@chakra-ui/react";
import { Box } from "./Box";
import SchoolList from "../schools/SchoolList";
import studyData from "../../config/studyData.json";

function SchoolLife()
{
    return (
        <Box id="content-4" title="Mon parcours scolaire" titleClass="title" titleStyle={{ color: "white"}}>
            <Text className="text-normal">
                Passionné par l'informatique depuis le collège, je poursuis mes études en informatique à Epitech.
                J'ai eu l'opportunité de travailler sur divers projets personnels et étudiants. 
            </Text>
            <SchoolList studyData={studyData}></SchoolList>
        </Box>
    )
}

export default SchoolLife;