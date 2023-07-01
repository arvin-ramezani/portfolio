import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

import {
  ShowMore,
  StyledProjectDesc,
} from '@/styles/components/project-card.styled';
import { projectsDescVariants } from './project-desc.variants';
import { useRouter } from 'next/router';

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
  const { locale } = useRouter();

  function toggleFullText() {
    onShowMore();
  }

  const moreTextContent = locale === 'fa' ? '...بیشتر' : 'more...';
  const lessTextContent = locale === 'fa' ? '...کمتر' : 'less...';

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
            {showMore ? lessTextContent : moreTextContent}
          </motion.span>
        </div>
      </ShowMore>
    </StyledProjectDesc>
  );
};

export default ProjectDesc;
