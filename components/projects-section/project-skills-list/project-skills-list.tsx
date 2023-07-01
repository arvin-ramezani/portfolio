import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { ToolsContainer } from '@/styles/components/project-card.styled';
import { theme } from '@/styles/themes/theme.styled';

interface ProjectSkillsList {
  skills: string[];
}

const ProjectSkillsList: FC<ProjectSkillsList> = ({ skills }) => {
  return (
    <ToolsContainer>
      <ul>
        {skills.map((skill) => (
          <motion.li
            key={skill}
            initial={{ background: theme.colors.white }}
            whileHover={{ background: theme.colors.darkWhite }}
          >
            <Image
              src="images/icons/bullet.svg"
              width={10}
              height={10}
              alt="bullet icon"
            />
            {skill}
          </motion.li>
        ))}
      </ul>
    </ToolsContainer>
  );
};

export default ProjectSkillsList;
