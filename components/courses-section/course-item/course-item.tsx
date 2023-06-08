import {
  CourseBody,
  CourseFooter,
  CourseLinkItem,
  CourseLinksList,
  ImageWrapper,
  LearnedItem,
  MoreText,
  StyledCourseItem,
} from '@/styles/components/courses-section.styled';
import { Variants, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const onCourseClickVariants: Variants = {
  initial: { scale: 1 },
  animate: { scale: [1.8, 1] },
};

const CourseItem = () => {
  const onCourseClickCtrl = useAnimationControls();

  const onCourseClick = () => {
    onCourseClickCtrl.start(onCourseClickVariants.animate);
  };

  return (
    <StyledCourseItem>
      <div onClick={onCourseClick}>
        <h3>Next.js & React - The Complete Guide</h3>
        <ImageWrapper>
          <Image
            src="/images/courses/nextjs.svg"
            alt="Nextjs Course"
            width={200}
            height={162}
          />
        </ImageWrapper>
      </div>

      <CourseBody>
        <h6>What I Learned</h6>
        <LearnedItem>
          <Image
            src="/images/icons/check.svg"
            alt="Check Icon"
            width={32}
            height={32}
          />
          Authentication and Authorization with next-auth
        </LearnedItem>
        <LearnedItem>
          <Image
            src="/images/icons/check.svg"
            alt="Check Icon"
            width={32}
            height={32}
          />
          SSG - SSR - ISR - CSR
        </LearnedItem>
        <LearnedItem>
          <Image
            src="/images/icons/check.svg"
            alt="Check Icon"
            width={32}
            height={32}
          />
          File Upload and Download
        </LearnedItem>

        <MoreText>more...</MoreText>
      </CourseBody>
      <CourseFooter>
        <CourseLinksList
          variants={onCourseClickVariants}
          initial={'initial'}
          animate={onCourseClickCtrl}
        >
          <CourseLinkItem>
            <Link
              href="https://www.udemy.com/course/nextjs-react-the-complete-guide/"
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/logo-udemy.svg"
                  alt="Udemy Logo"
                  width={50}
                  height={20}
                />
                Udemy Link
              </a>
            </Link>
          </CourseLinkItem>
          <CourseLinkItem>
            <Link
              href="https://pro.academind.com/p/nextjs-react-the-complete-guide"
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/logo-academind.svg"
                  alt="Udemy Logo"
                  width={60}
                  height={45}
                />
                https://pro.academind.com/
              </a>
            </Link>
          </CourseLinkItem>
        </CourseLinksList>
      </CourseFooter>
    </StyledCourseItem>
  );
};

export default CourseItem;
