import { useRouter } from 'next/router';
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
  MoreText,
  StyledCourseItem,
} from '@/styles/components/courses-section.styled';
import { ICourseWithTranslate } from '@/utils/types/course.types';
import useWindowDimensions from '@/hooks/use-window-dimensions/use-window-dimensions';
import {
  courseItemVariants,
  onCourseClickVariants,
} from './course-item.variants';
import LearnedList from './learned-list/learned-list';
import LoadingSpinner from '@/components/ui/loading-spinner/loading-spinner';

interface CourseItemProps extends ICourseWithTranslate {}

const CourseItem: FC<CourseItemProps> = ({
  name,
  image,
  learnedList,
  links,
  learned,
}) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [openLearnedList, setOpenLearnedList] = useState(false);
  const { width: windowWidth } = useWindowDimensions();
  const onCourseClickCtrl = useAnimationControls();
  const { t: translator } = useTranslation();
  const router = useRouter();

  const onOpenLearnedList = () => setOpenLearnedList((prev) => !prev);

  const onCourseClick = () => {
    onCourseClickCtrl.start(onCourseClickVariants.animate);
  };

  const moreTextContent = router.locale === 'fa' ? 'بیشتر ...' : 'more...';
  const lessTextContent = router.locale === 'fa' ? 'کمتر ...' : 'less...';

  return (
    <StyledCourseItem
      variants={courseItemVariants}
      initial={'close'}
      animate={openLearnedList ? 'open' : 'close'}
      custom={{ windowWidth, imageLoading }}
    >
      <CourseItemHeaderWrapper onClick={onCourseClick}>
        <ImageWrapper>
          {imageLoading && <LoadingSpinner />}

          <Image
            src={image}
            alt={name}
            width={200}
            height={162}
            onLoadingComplete={() => setImageLoading(false)}
          />
        </ImageWrapper>
        <h3>{name}</h3>
      </CourseItemHeaderWrapper>

      <CourseBody>
        <h6>{translator('home:courses_learned_title')}:</h6>

        <LearnedList
          learned={learned}
          openLearnedList={openLearnedList}
        />

        <MoreText onClick={onOpenLearnedList}>
          {openLearnedList ? lessTextContent : moreTextContent}
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
