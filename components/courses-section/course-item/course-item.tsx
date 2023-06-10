import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import {
  CourseBody,
  CourseFooter,
  CourseItemHeaderWrapper,
  CourseLinkItem,
  CourseLinksList,
  ImageWrapper,
  LearnedItem,
  MoreText,
  StyledCourseItem,
} from '@/styles/components/courses-section.styled';
import { Variants, useAnimationControls } from 'framer-motion';
import { ICourse } from '@/utils/types/course.types';

const onCourseClickVariants: Variants = {
  initial: { scale: 1 },
  animate: { scale: [1.8, 1] },
};

interface CourseItemProps extends ICourse {
  // name: string;
  // image: string;
  // learnedList: string[];
  // links: {
  //   name: string;
  //   logo: string;
  //   url: string;
  // }[];
}

const CourseItem: FC<CourseItemProps> = ({
  name,
  image,
  learnedList,
  links,
}) => {
  const onCourseClickCtrl = useAnimationControls();

  const onCourseClick = () => {
    onCourseClickCtrl.start(onCourseClickVariants.animate);
  };

  return (
    <StyledCourseItem>
      <CourseItemHeaderWrapper onClick={onCourseClick}>
        <h3>{name}</h3>
        <ImageWrapper>
          <Image
            src={image}
            alt={name}
            width={200}
            height={162}
          />
        </ImageWrapper>
      </CourseItemHeaderWrapper>

      <CourseBody>
        <h6>What I Learned</h6>
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
        {/* <LearnedItem>
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
        </LearnedItem> */}

        <MoreText>more...</MoreText>
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
                    width={50}
                    height={20}
                  />
                  {link.name}
                </a>
              </Link>
            </CourseLinkItem>
          ))}

          {/* <CourseLinkItem>
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
          </CourseLinkItem> */}
        </CourseLinksList>
      </CourseFooter>
    </StyledCourseItem>
  );
};

export default CourseItem;
