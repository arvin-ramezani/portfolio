import React, { FC, useState, useRef } from 'react';
import { AnimatePresence, Variants, motion } from 'framer-motion';

import {
  PlayBackDrop,
  ShowMore,
  StyledProject,
  ToolsContainer,
  VideoContainer,
} from '@/styles/components/project-card.styled';
import Image from 'next/image';
import ProjectSkillsList from './project-skills-list/project-skills-list';
import ProjectVideoModal from './video-modal/video-modal';
import ProjectDesc from './project-desc/project-desc';
import { projectsVariants } from './project-desc/project-desc.variants';

interface ProjectProps {
  name: string;
  video: string;
  cover: string;
  translatorName: string;
}

const ProjectCard: FC<ProjectProps> = ({
  name,
  video,
  cover,
  translatorName,
}) => {
  const [playVideo, setPlayVideo] = useState(false);
  const [ShowMore, setShowMore] = useState(false);

  const showMoreHandler = () => setShowMore((prev) => !prev);

  return (
    <StyledProject
      variants={projectsVariants}
      initial={'less'}
      animate={'more'}
      custom={ShowMore}
    >
      <h4>{name}</h4>
      <VideoContainer>
        <motion.img
          src={cover}
          alt="project cover"
          initial={{ opacity: 1 }}
          animate={playVideo ? { opacity: 0 } : { opacity: 1 }}
        />
        <PlayBackDrop onClick={setPlayVideo.bind(null, true)}>
          <Image
            src="./images/icons/play.svg"
            width={42}
            height={42}
            alt="play icon"
          />
        </PlayBackDrop>

        <ProjectVideoModal
          show={playVideo}
          onClose={setPlayVideo}
          video={video}
        />
      </VideoContainer>

      <ProjectSkillsList
        skills={['Swagger', 'NestJs', 'Prisma', 'PostgreSQL']}
      />

      <ProjectDesc
        translatorName={translatorName}
        onShowMore={showMoreHandler}
        showMore={ShowMore}
      />
    </StyledProject>
  );
};

export default ProjectCard;
