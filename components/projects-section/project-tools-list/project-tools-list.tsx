import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { ToolsContainer } from '@/styles/components/project-card.styled';
import { theme } from '@/styles/themes/theme.styled';

interface ProjectToolsListProps {
  tools: string[];
}

const ProjectToolsList: FC<ProjectToolsListProps> = ({ tools }) => {
  return (
    <ToolsContainer>
      <ul>
        {tools.map((tools) => (
          <motion.li
            key={tools}
            initial={{ background: theme.colors.white }}
            whileHover={{ background: theme.colors.darkWhite }}
          >
            <Image
              src="/images/icons/bullet.svg"
              width={7}
              height={7}
              alt="bullet icon"
            />
            {tools}
          </motion.li>
        ))}
      </ul>
    </ToolsContainer>
  );
};

export default ProjectToolsList;
