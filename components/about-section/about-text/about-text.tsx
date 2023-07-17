import React, { useRef, useState, useEffect } from 'react';
import { useAnimation, useInView } from 'framer-motion';
import { useTranslation } from 'next-i18next';

import {
  AboutTextBlock,
  AboutTextItem,
  AboutTitle,
  StyledBullet,
} from '@/styles/components/about-section.styled';
import {
  aboutTextBlockVariants,
  aboutTextItemsVariants,
  styledBulletVariants,
} from './about-text.variants';
import DownloadResume from '../download-resume/download-resume';

const AboutText = () => {
  const [aboutTextHover, setAboutTextHover] = useState<number>(0);
  const textRef = useRef(null);
  const isTextInView = useInView(textRef);
  const textItemAnimController = useAnimation();
  const { t: translator } = useTranslation();

  const onAboutTextHoverStart = (index: number) => setAboutTextHover(index);

  const onAboutTextHoverEnd = () => setAboutTextHover(0);

  useEffect(() => {
    if (isTextInView) {
      textItemAnimController.start('animate');
    } else {
      textItemAnimController.start('initial');
    }
  }, [isTextInView, textItemAnimController]);

  return (
    <AboutTextBlock
      variants={aboutTextBlockVariants}
      ref={textRef}
      initial="initial"
      animate={isTextInView ? 'animate' : 'exit'}
      exit={'exit'}
    >
      <AboutTitle>{translator('home:about_title')}</AboutTitle>
      <AboutTextItem
        variants={aboutTextItemsVariants}
        initial={'initial'}
        animate={textItemAnimController}
        transition={{ delay: 0.8, duration: 0.8 }}
        onHoverStart={onAboutTextHoverStart.bind(null, 1)}
        onHoverEnd={onAboutTextHoverEnd}
      >
        <StyledBullet
          variants={styledBulletVariants}
          initial="initial"
          animate={aboutTextHover === 1 ? 'animate' : 'initial'}
        />
        <span
          dangerouslySetInnerHTML={{
            __html: `${translator(`home:about_text_1`)}`,
          }}
        >
          {/* {translator('home:about_text_1')} */}
        </span>
      </AboutTextItem>

      <AboutTextItem
        variants={aboutTextItemsVariants}
        initial={'initial'}
        animate={textItemAnimController}
        transition={{ delay: 1.2, duration: 0.8 }}
        onHoverStart={onAboutTextHoverStart.bind(null, 2)}
        onHoverEnd={onAboutTextHoverEnd}
      >
        <StyledBullet
          variants={styledBulletVariants}
          initial="initial"
          animate={aboutTextHover === 2 ? 'animate' : 'initial'}
        />
        <span>{translator('home:about_text_2')}</span>
      </AboutTextItem>

      <AboutTextItem
        variants={aboutTextItemsVariants}
        initial={'initial'}
        animate={textItemAnimController}
        transition={{ delay: 1.6, duration: 0.8 }}
        onHoverStart={onAboutTextHoverStart.bind(null, 3)}
        onHoverEnd={onAboutTextHoverEnd}
      >
        <StyledBullet
          variants={styledBulletVariants}
          initial="initial"
          animate={aboutTextHover == 3 ? 'animate' : 'initial'}
        />
        <span>{translator('home:about_text_3')}</span>
      </AboutTextItem>

      <DownloadResume />
    </AboutTextBlock>
  );
};

export default AboutText;
