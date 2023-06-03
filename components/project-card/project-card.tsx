import React, { FC, useState, useRef } from 'react';
import { AnimatePresence, Variants, motion } from 'framer-motion';

import {
  PlayBackDrop,
  StyledProject,
  ToolsContainer,
  VideoContainer,
  VideoModal,
} from '@/styles/components/project-card.styled';
import Image from 'next/image';
import { theme } from '@/styles/theme.styled';

interface ProjectProps {
  name: string;
  video: string;
  cover: string;
}

export const videoModalVariants: Variants = {
  hidden: { opacity: 0, width: '100vw', height: '0' },
  visible: {
    opacity: 1,
    height: '100vh',
    transition: {
      when: 'beforeChildren',
      duration: 0.6,
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

const videoVariants: Variants = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { delay: 0.4 } },
};

const ProjectCard: FC<ProjectProps> = ({ name, video, cover }) => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onVideoClick = () => {
    setPlay(true);
    videoRef.current?.play();
  };

  return (
    <StyledProject>
      <h4>{name}</h4>
      <VideoContainer>
        <motion.img
          src={cover}
          alt="project cover"
          initial={{ opacity: 1 }}
          animate={play ? { opacity: 0 } : { opacity: 1 }}
        />
        <PlayBackDrop onClick={setPlay.bind(null, true)}>
          <Image
            src="./images/icons/play.svg"
            width={42}
            height={42}
            alt="play icon"
          />
        </PlayBackDrop>

        <AnimatePresence>
          {play && (
            <VideoModal
              variants={videoModalVariants}
              initial={'hidden'}
              animate={'visible'}
              exit={'hidden'}
              key="videoModal"
            >
              <Image
                src="./images/icons/close.svg"
                alt="close icon"
                width={42}
                height={42}
                onClick={setPlay.bind(null, false)}
              />

              <motion.video
                controls
                autoPlay
                playsInline
                variants={videoVariants}
                initial={'initial'}
                animate={'animate'}
                exit={'initial'}
                src={video}
              ></motion.video>
            </VideoModal>
          )}
        </AnimatePresence>
      </VideoContainer>
      <ToolsContainer>
        <ul>
          <motion.li
            initial={{ background: '#fff' }}
            whileHover={{ background: `${theme.colors.darkWhite}` }}
          >
            <Image
              src="images/icons/bullet.svg"
              width={10}
              height={10}
              alt="bullet icon"
            />
            Swagger
          </motion.li>
          <motion.li
            initial={{ background: '#fff' }}
            whileHover={{ background: `${theme.colors.darkWhite}` }}
          >
            <Image
              src="images/icons/bullet.svg"
              width={10}
              height={10}
              alt="bullet icon"
            />
            NestJs
          </motion.li>
          <motion.li
            initial={{ background: '#fff' }}
            whileHover={{ background: `${theme.colors.darkWhite}` }}
          >
            <Image
              src="images/icons/bullet.svg"
              width={10}
              height={10}
              alt="bullet icon"
            />
            Prisma
          </motion.li>
          <motion.li
            initial={{ background: '#fff' }}
            whileHover={{ background: `${theme.colors.darkWhite}` }}
          >
            <Image
              src="images/icons/bullet.svg"
              width={10}
              height={10}
              alt="bullet icon"
            />
            PostgreSQL
          </motion.li>
        </ul>
      </ToolsContainer>
    </StyledProject>
  );
};

export default ProjectCard;
