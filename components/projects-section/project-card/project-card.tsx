import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import {
  PlayBackDrop,
  StyledProjectCard,
  VideoContainer,
} from '@/styles/components/project-card.styled';
import ProjectToolsList from '../project-tools-list/project-tools-list';
import ProjectVideoModal from '../video-modal/video-modal';
import ProjectDesc from '../project-desc/project-desc';
import ProjectActions from '../project-actions/project-action';
import { projectsVariants } from './project-card.variants';
import useWindowDimensions from '@/hooks/use-window-dimensions/use-window-dimensions';
import { IProject } from '@/utils/types/project.types';

interface ProjectProps extends IProject {}

const ProjectCard: FC<ProjectProps> = ({
  name,
  video,
  cover,
  translatorName,
  github,
  onlineLink,
  tools,
}) => {
  const [playVideo, setPlayVideo] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const { width: windowWidth } = useWindowDimensions();

  const showMoreHandler = () => setShowMore((prev) => !prev);

  return (
    <StyledProjectCard
      variants={projectsVariants}
      initial={'less'}
      animate={'more'}
      custom={{ showMore, windowWidth }}
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

      <div style={{ position: 'relative' }}>
        <ProjectToolsList tools={tools} />

        <ProjectDesc
          translatorName={translatorName}
          onShowMore={showMoreHandler}
          showMore={showMore}
        />
      </div>

      <ProjectActions
        github={github}
        onlineLink={onlineLink}
      />
    </StyledProjectCard>
  );
};

export default ProjectCard;
