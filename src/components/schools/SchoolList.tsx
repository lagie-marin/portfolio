import React from 'react';
import SchoolCard from '@/components/schools/SchoolCard';
import { Box } from '@chakra-ui/react';
import styles from './SchoolList.module.css';
import { IoMdArrowForward } from 'react-icons/io';
import { useLanguage } from '@/config/langage';

interface SchoolTranslation {
    title: string;
    description: string;
}

interface SchoolListProps {
    studyData: {
        [key: string]: {
            smallImage: string;
            schoolImage: string;
            actual: boolean;
            fr: SchoolTranslation;
            en: SchoolTranslation;
        };
    };
}

const SchoolList: React.FC<SchoolListProps> = ({ studyData }) => {
    const { language } = useLanguage();
    const keys = Object.keys(studyData);

    return (
        <div className={styles.schoolList}>
            {keys.map((key, index) => {
                const localizedData = studyData[key][language] || studyData[key].fr;
                
                return (
                    <React.Fragment key={key}>
                        <SchoolCard
                            id={key}
                            className="primary"
                            smallImage={studyData[key].smallImage}
                            schoolImage={studyData[key].schoolImage}
                            title={localizedData.title}
                            description={localizedData.description}
                            actual={studyData[key].actual}
                        />
                        {index < keys.length - 1 && (
                            <Box as="span" className={styles.arrow}>
                                <IoMdArrowForward />
                            </Box>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default SchoolList;