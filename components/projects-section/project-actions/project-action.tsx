import React, { FC } from 'react';

import Button from '@/components/ui/button/button';
import OutlineBtn from '@/components/ui/outline-btn/outline-btn';
import { StyledProjectActions } from '@/styles/components/project-card.styled';
import { theme } from '@/styles/themes/theme.styled';
import { IProject } from '@/utils/types/project.types';
import { useTranslation } from 'next-i18next';

interface ProjectActionsProps {
  github: IProject['github'];
  onlineLink?: IProject['onlineLink'];
}

const ProjectActions: FC<ProjectActionsProps> = ({ github, onlineLink }) => {
  const { t: translator } = useTranslation();

  const onGithubClick = () => {
    if (typeof window !== 'undefined') window.open(github, '_blank');
  };

  return (
    <StyledProjectActions>
      <Button
        text={translator('common:view_on_github_btn')}
        color={theme.colors.primary}
        textColor={theme.colors.black}
        onClick={onGithubClick}
      />

      {onlineLink && (
        <OutlineBtn
          text={translator('common:view_online_btn')}
          color={theme.colors.black}
          onClick={() => {}}
        />
      )}
    </StyledProjectActions>
  );
};

export default ProjectActions;
