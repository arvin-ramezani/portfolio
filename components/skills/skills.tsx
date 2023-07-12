import React, { useRef } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { AnimatePresence, Variants, useInView } from 'framer-motion';

import {
  SkillText,
  SkillsItem,
  StyledSkills,
  SkillsItemBlock,
  SkillsTitle,
} from '@/styles/components/skills.styled';
import { aboutItemsVariants } from './skills.variants';
import { SKILLS_LIST } from '@/utils/data/skills.data';

const skillsContainerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.2 },
  },
};

const skillsItemsVariants: Variants = {
  initial: { y: -40, opacity: 0 },
  animate: (index) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, delay: index * 0.2 },
  }),
};

const Skills = () => {
  const { t: translator } = useTranslation();
  const skillsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef);

  return (
    <StyledSkills>
      <SkillsTitle>{translator('home:skills_title')}</SkillsTitle>

      <AnimatePresence>
        <SkillsItemBlock
          ref={skillsRef}
          variants={skillsContainerVariants}
          initial={'initial'}
          animate={isSkillsInView ? 'animate' : 'initial'}
          exit={'initial'}
          key="skillsContainer"
        >
          {SKILLS_LIST.map((skill, index) => (
            <SkillsItem
              key={skill.name}
              variants={skillsItemsVariants}
              initial={'initial'}
              animate={isSkillsInView ? 'animate' : 'initial'}
              exit={'initial'}
              custom={index}
            >
              <Image
                src={skill.image}
                width={35}
                height={35}
                alt={skill.name}
              />

              <SkillText>{skill.name}</SkillText>
            </SkillsItem>
          ))}
        </SkillsItemBlock>
      </AnimatePresence>
    </StyledSkills>
  );
};

export default Skills;
