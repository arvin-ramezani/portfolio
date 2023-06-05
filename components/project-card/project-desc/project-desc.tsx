import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

import {
  ShowMore,
  StyledProjectDesc,
} from '@/styles/components/project-card.styled';
import { projectsDescVariants } from './project-desc.variants';

interface ProjectDescProps {
  description: string;
  translatorName: string;
}

const ProjectDesc: FC<ProjectDescProps> = ({ description, translatorName }) => {
  const { t: translator } = useTranslation();
  const [showFullText, setShowFullText] = useState(false);

  function toggleFullText() {
    setShowFullText((prev) => !prev);
  }

  return (
    <StyledProjectDesc
      variants={projectsDescVariants}
      initial={'less'}
      animate={'more'}
      custom={showFullText}
    >
      <p
        dangerouslySetInnerHTML={{
          __html: `${translator(`home:projects_desc_${translatorName}`)}`,
        }}
      >
        {/* This is a practice project from{' '}
        <a
          href="https://www.udemy.com/course/the-nest-js-bootcamp-complete-developer-guide/"
          target="_blank"
        >
          <strong>The Nest JS Bootcamp - Complete Developer Guide</strong>{' '}
        </a>
        Course. This is a simple API side of Realtor app like{' '}
        <a
          href="https://www.realtor.com"
          target="_blank"
        >
          Realtor.com
        </a>
        , where users can signup / signin as realtor to show and sell their
        homes, and other users as buyers can signup / signin for message to
        realtors to buy the specific house.
        <br />
        This was very simple app but teaches a lot about different parts of
        NestJS framework like: ORM Integration, Middleware, Interceptors,
        Guards, Decorators, Param Decorators, Integration Testing and so on.
        <br />I also learned Swagger for API documentation and apply to this
        project. */}
      </p>
      <ShowMore onClick={toggleFullText}>
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.2 }}
        >
          {showFullText ? 'less..' : 'more...'}
        </motion.span>
      </ShowMore>
    </StyledProjectDesc>
  );
};

export default ProjectDesc;
