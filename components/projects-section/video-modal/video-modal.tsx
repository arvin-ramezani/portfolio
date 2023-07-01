import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { useTranslation } from 'next-i18next';

import {
  StyledNotice,
  StyledVideoModal,
} from '@/styles/components/project-card.styled';
import {
  videoModalVariants,
  videoVariants,
} from './project-video-modal.variants';
import Button from '@/components/ui/button/button';
import { theme } from '@/styles/themes/theme.styled';

interface VideoModalProps {
  show: boolean;
  onClose: (close: boolean) => void;
  video: string;
}

const VideoModal: FC<VideoModalProps> = ({ show, video, onClose }) => {
  const { t: translator } = useTranslation();
  const [showNotice, setShowNotice] = useState(true);

  const onCloseHandler = () => {
    setShowNotice(true);
    onClose(false);
  };

  const noticeHandler = () => {
    setShowNotice(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <StyledVideoModal
          variants={videoModalVariants}
          initial={'hidden'}
          animate={'visible'}
          exit={'hidden'}
          key="videoModal"
          onClick={onCloseHandler}
        >
          <Image
            src="./images/icons/close.svg"
            alt="close icon"
            width={42}
            height={42}
            onClick={onCloseHandler}
          />

          {showNotice ? (
            <StyledNotice onClick={(e) => e.stopPropagation()}>
              <h4>Notice:</h4>
              <p>{translator('home:projects_video_modal_notice_problem')}</p>
              <p>{translator('home:projects_video_modal_notice_solution')}</p>

              <Button
                color={theme.colors.primary}
                textColor={theme.colors.black}
                text={translator('common:got_it_btn')}
                wrapperStyle={{ width: '50%', margin: '2rem auto' }}
                onClick={noticeHandler}
              />
            </StyledNotice>
          ) : (
            <motion.video
              controls
              autoPlay
              playsInline
              src={video}
              variants={videoVariants}
              initial={'initial'}
              animate={'animate'}
              exit={'initial'}
              onClick={(e) => e.stopPropagation()}
            ></motion.video>
          )}
        </StyledVideoModal>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
