import { useLanguage } from '@/config/langage';
import { Box } from './Box';
import "./about.css";

export function About() {
    const { t } = useLanguage();
    return (
        <Box id="content-8" title={t("about.title")} titleStyle={{color: "white"}} className="title">
            <div>
                <div className="info-container">
                    <div className="info-item">
                        <strong className="text-normal">{t("about.name")}</strong>
                        <p className="text-normal">Marin Lagie</p>
                    </div>
                    <div className="info-item">
                        <strong className="text-normal">{t("about.age")}</strong>
                        <p className="text-normal">20 ans</p>
                    </div>
                    <div className="info-item">
                        <strong className="text-normal">{t("about.location")}</strong>
                        <p className="text-normal">Lyon, France</p>
                    </div>
                </div>
                <div className="text-normal about-me">
                    <p>
                        {t("about.hobby")}
                    </p>
                    <p>
                        {t("about.discovery")}
                    </p>
                    <p>
                        {t("about.project1")}
                    </p>
                    <p>
                        {t("about.project2")}
                    </p>
                    <p>
                        {t("about.current")}
                    </p>
                </div>
            </div>
        </Box>
    );
}