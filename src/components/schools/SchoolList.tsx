import React from 'react';
import SchoolCard from '@/components/schools/SchoolCard';
import { Box } from '@chakra-ui/react';
import styles from './SchoolList.module.css';

interface SchoolListProps {
  studyData: {
    [key: string]: {
      smallImage: string;
      schoolImage: string;
      title: string;
      description: string;
      actual: boolean;
    };
  };
}

const SchoolList: React.FC<SchoolListProps> = ({ studyData }) => {
  const keys = Object.keys(studyData);

  return (
    <div className={styles.schoolList}>
      {keys.map((key, index) => (
        <React.Fragment key={key}>
          <SchoolCard
            smallImage={studyData[key].smallImage}
            schoolImage={studyData[key].schoolImage}
            title={studyData[key].title}
            description={studyData[key].description}
            actual={studyData[key].actual}
          />
          {index < keys.length - 1 && (
            <Box as="span" className={styles.arrow}>
              ➔
            </Box>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SchoolList;