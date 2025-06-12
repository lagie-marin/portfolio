import { Box } from "./Box";
import SchoolList from "../schools/SchoolList";
import studyData from "../../config/studyData.json";
import { useLanguage } from "@/config/langage";

function SchoolLife()
{
    const { t } = useLanguage();
    return (
        <Box id="content-4" title={t("school.title")} titleClass="title" titleStyle={{ color: "white"}}>
            <div className="text-normal">
                <p>
                    {t("school.desc")}
                </p>
            </div>
            <SchoolList studyData={studyData}></SchoolList>
        </Box>
    )
}

export default SchoolLife;