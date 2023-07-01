import { useTranslation } from 'next-i18next';
import { useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react';

import {
  CourseBody,
  CourseFooter,
  CourseItemHeaderWrapper,
  CourseLinkItem,
  CourseLinksList,
  ImageWrapper,
  LearnedItem,
  LearnedList,
  MoreText,
  StyledCourseItem,
} from '@/styles/components/courses-section.styled';
import { ICourse } from '@/utils/types/course.types';
import useWindowDimensions from '@/hooks/use-window-dimensions/use-window-dimensions';
import {
  courseItemVariants,
  learnedListVariants,
  onCourseClickVariants,
} from './course-item.variants';

interface CourseItemProps extends ICourse {}

const CourseItem: FC<CourseItemProps> = ({
  name,
  image,
  learnedList,
  links,
}) => {
  const [openLearnedList, setOpenLearnedList] = useState(false);
  const { width: windowWidth } = useWindowDimensions();
  const onCourseClickCtrl = useAnimationControls();
  const { t: translator } = useTranslation();

  const onOpenLearnedList = () => setOpenLearnedList((prev) => !prev);

  const onCourseClick = () => {
    onCourseClickCtrl.start(onCourseClickVariants.animate);
  };

  return (
    <StyledCourseItem
      variants={courseItemVariants}
      initial={'close'}
      animate={openLearnedList ? 'open' : 'close'}
      custom={windowWidth}
    >
      <CourseItemHeaderWrapper onClick={onCourseClick}>
        <ImageWrapper>
          <Image
            src={image}
            alt={name}
            width={200}
            height={162}
          />
        </ImageWrapper>
        <h3>{name}</h3>
      </CourseItemHeaderWrapper>

      <CourseBody>
        <h6>What I Learned</h6>
        <LearnedList
          variants={learnedListVariants}
          initial={'close'}
          animate={openLearnedList ? 'open' : 'close'}
        >
          {learnedList.map((item) => (
            <LearnedItem key={item}>
              <Image
                src="/images/icons/check.svg"
                alt="Check Icon"
                width={32}
                height={32}
              />
              {item}
            </LearnedItem>
          ))}
        </LearnedList>

        <MoreText onClick={onOpenLearnedList}>
          {openLearnedList ? 'less...' : 'more...'}
        </MoreText>
      </CourseBody>
      <CourseFooter>
        <CourseLinksList
          variants={onCourseClickVariants}
          initial={'initial'}
          animate={onCourseClickCtrl}
        >
          {links.map((link) => (
            <CourseLinkItem key={link.name}>
              <Link
                href={link.url}
                passHref
                legacyBehavior
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={link.logo!}
                    alt="Udemy Logo"
                    width={80}
                    height={50}
                  />
                  {link.name}
                </a>
              </Link>
            </CourseLinkItem>
          ))}
        </CourseLinksList>
      </CourseFooter>
    </StyledCourseItem>
  );
};

export default CourseItem;
