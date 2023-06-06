import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

import {
  ShowMore,
  StyledProjectDesc,
} from '@/styles/components/project-card.styled';
import { projectsDescVariants } from './project-desc.variants';

interface ProjectDescProps {
  translatorName: string;
  onShowMore: Function;
  showMore: boolean;
}

const ProjectDesc: FC<ProjectDescProps> = ({
  translatorName,
  onShowMore,
  showMore,
}) => {
  const { t: translator } = useTranslation();

  function toggleFullText() {
    onShowMore();
  }

  return (
    <StyledProjectDesc
      variants={projectsDescVariants}
      initial={'less'}
      animate={'more'}
      custom={showMore}
    >
      <p
        dangerouslySetInnerHTML={{
          __html: `${translator(`home:projects_desc_${translatorName}`)}`,
        }}
      ></p>
      <ShowMore>
        <div onClick={toggleFullText}>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.2 }}
          >
            {showMore ? 'less..' : 'more...'}
          </motion.span>
        </div>
      </ShowMore>
    </StyledProjectDesc>
  );
};

export default ProjectDesc;
