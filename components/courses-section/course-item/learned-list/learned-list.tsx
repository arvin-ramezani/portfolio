import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import {
  StyledLearnedItem,
  StyledLearnedList,
} from '@/styles/components/courses-section.styled';
import { ICourseWithTranslate } from '@/utils/types/course.types';
import Image from 'next/image';
import { learnedListVariants } from './learned-list.variants';

interface LearnedListProps {
  learned: ICourseWithTranslate['learned'];
  openLearnedList: boolean;
}

const LearnedList: FC<LearnedListProps> = ({
  learned: { itemLength, translatorName },
  openLearnedList,
}) => {
  const { t: translator } = useTranslation();

  return (
    <StyledLearnedList
      variants={learnedListVariants}
      initial={'close'}
      animate={openLearnedList ? 'open' : 'close'}
    >
      {Array(itemLength)
        .fill(translatorName)
        .map((item, index) => (
          <StyledLearnedItem key={itemLength++}>
            <Image
              src="/images/icons/check.svg"
              alt="Check Icon"
              width={16}
              height={16}
            />
            {translator(`home:course_${item}_learned_${index + 1}`)}
            {/* {translator('home:course_learned_sql_1')} */}
          </StyledLearnedItem>
        ))}
    </StyledLearnedList>
  );
};

export default LearnedList;
