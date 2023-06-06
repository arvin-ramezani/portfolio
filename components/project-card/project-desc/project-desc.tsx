import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

import {
  ShowMore,
  StyledProjectDesc,
} from '@/styles/components/project-card.styled';

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
    <StyledProjectDesc>
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
          {showMore ? 'less..' : 'more...'}
        </motion.span>
      </ShowMore>
    </StyledProjectDesc>
  );
};

export default ProjectDesc;
