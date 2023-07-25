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
        <Image
          src={cover}
          alt={`Project ${name} Cover`}
          width={720}
          height={405}
          // sizes="(min-width: 1400px) calc(20vw - 35px),
          // (min-width: 1000px) calc(26.84vw - 38px),
          // (min-width: 780px) calc(40vw - 38px),
          // calc(100vw - 48px)"
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
