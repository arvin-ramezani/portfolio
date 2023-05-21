import React, { FC } from 'react';

import { StyledProject } from '@/styles/components/project.styled';

interface ProjectProps {
  name: string;
  video: string;
}

const Project: FC<ProjectProps> = ({ name, video }) => {
  return (
    <StyledProject>
      <h4>{name}</h4>
      <video
        src={video}
        controls
        playsInline
      ></video>
    </StyledProject>
  );
};

export default Project;
