import React, { useRef } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Variants, useInView } from 'framer-motion';

import {
  SkillText,
  SkillsItem,
  StyledSkills,
  SkillsItemBlock,
  SkillsTitle,
} from '@/styles/components/skills.styled';
import { aboutItemsVariants } from './skills.variants';

const Skills = () => {
  const { t: translator } = useTranslation();
  const skillsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef);

  return (
    <StyledSkills
      variants={aboutItemsVariants}
      ref={skillsRef}
      custom={'right'}
      initial="initial"
      animate={isSkillsInView ? 'animate' : 'exit'}
      exit={'exit'}
    >
      <SkillsTitle>{translator('home:skills_title')}</SkillsTitle>
      <SkillsItemBlock>
        <SkillsItem>
          <Image
            src="./images/icons/html.svg"
            width={45}
            height={40}
            alt="html"
          />

          <SkillText>{'HTML'}</SkillText>
        </SkillsItem>
        <SkillsItem>
          <Image
            src="./images/icons/css.svg"
            width={45}
            height={40}
            alt="css"
          />

          <SkillText>{'CSS'}</SkillText>
        </SkillsItem>
        <SkillsItem>
          <Image
            src="./images/icons/javascript.svg"
            width={45}
            height={40}
            alt="javascript"
          />

          <SkillText>{'JavaScript'}</SkillText>
        </SkillsItem>
        <SkillsItem>
          <Image
            src="./images/icons/nodejs.svg"
            width={45}
            height={40}
            alt="nodejs"
          />

          <SkillText>{translator('home:skill_name_nodejs')}</SkillText>
        </SkillsItem>
        <SkillsItem>
          <Image
            src="./images/icons/reactjs.svg"
            width={45}
            height={40}
            alt="nodejs"
          />

          <SkillText>{'ReactJS'}</SkillText>
        </SkillsItem>
        <SkillsItem>
          <Image
            src="./images/icons/nextjs.svg"
            width={45}
            height={40}
            alt="nextjs"
          />
          <SkillText>{translator('home:skill_name_nextjs')}</SkillText>
        </SkillsItem>
        <SkillsItem>
          <Image
            src="./images/icons/redux.svg"
            width={45}
            height={40}
            alt="redux"
          />
          <SkillText>{'Redux'}</SkillText>
        </SkillsItem>
        <SkillsItem>
          <Image
            src="./images/icons/styled-components.svg"
            width={120}
            height={40}
            alt="styled-components"
          />
        </SkillsItem>
        <SkillsItem>
          <Image
            src="./images/icons/framer-motion.svg"
            width={45}
            height={40}
            alt="framer-motion"
          />
          <SkillText style={{ fontSize: '.8rem' }}>{'Framer Motion'}</SkillText>
        </SkillsItem>
        <SkillsItem>
          <Image
            src="./images/icons/nestjs.svg"
            width={45}
            height={40}
            alt="nextjs"
          />
          <SkillText>{'NestJS'}</SkillText>
        </SkillsItem>
        <SkillsItem>
          <Image
            src="./images/icons/typescript.svg"
            width={45}
            height={40}
            alt="nextjs"
          />
          <SkillText>{'TypeScript'}</SkillText>
        </SkillsItem>
        <SkillsItem>
          <Image
            src="./images/icons/mongoDB.svg"
            width={45}
            height={40}
            alt="mongodb"
          />
          <SkillText>{'MongoDB'}</SkillText>
        </SkillsItem>
      </SkillsItemBlock>
    </StyledSkills>
  );
};

export default Skills;
