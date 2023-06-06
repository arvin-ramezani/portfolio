import React from 'react';

import Button from '@/components/ui/button/button';
import OutlineBtn from '@/components/ui/outline-btn/outline-btn';
import { StyledProjectActions } from '@/styles/components/project-card.styled';
import { theme } from '@/styles/theme.styled';

const ProjectActions = () => {
  return (
    <StyledProjectActions>
      <Button
        text={'View On Github'}
        color={theme.colors.primary}
        textColor={theme.colors.black}
      />

      <OutlineBtn
        text={'View Online'}
        color={theme.colors.black}
        onClick={() => {}}
      />
    </StyledProjectActions>
  );
};

export default ProjectActions;
