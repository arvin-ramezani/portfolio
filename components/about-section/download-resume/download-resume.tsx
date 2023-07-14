import React, { useState } from 'react';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

import Button from '@/components/ui/button/button';
import {
  DownloadResumeBlock,
  DownloadResumeBtnWrapper,
} from '@/styles/components/about-section.styled';
import { theme } from '@/styles/themes/theme.styled';
import styled, { CSSProperties } from 'styled-components';

export const downloadResumeBlockVariants: Variants = {
  closed: { display: 'flex', justifyContent: 'flex-start' },
  open: { display: 'flex', justifyContent: 'space-between' },
};

export const dowloadResumeBtnVariants: Variants = {
  initial: () => {
    return {
      opacity: 0,
      scale: 0,
    };
  },
  animate: {
    opacity: 1,
    scale: 1,
  },

  exit: () => {
    return {
      opacity: 0,
      scale: 0,
    };
  },
};

const DownloadResume = () => {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const { t: translator } = useTranslation();

  const onResumeDownload = (resumeLanguage: 'persian' | 'english') => {
    const englishFileName = 'Arvin_ramezani_resume - English.pdf';
    const persianFileName = 'Arvin_ramezani_resume - Persian.pdf';

    if (typeof document === 'undefined') return;

    if (resumeLanguage === 'english') {
      const url = `/download/english/${englishFileName}`;

      createAtagAndDownload(url, englishFileName);
      return;
    }

    if (resumeLanguage === 'persian') {
      const url = `/download/persian/${persianFileName}`;

      createAtagAndDownload(url, persianFileName);
      return;
    }
  };

  const createAtagAndDownload = (url: string, filename: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();

    return;
  };

  const closeBtnWrapperStyles: CSSProperties = {
    position: 'absolute',
    top: '-80%',
    maxWidth: 'fit-content',
  };

  const closeBtnStyles: CSSProperties = {
    border: '1px solid #ffffff7a',
    borderRadius: '50%',
    fontSize: '.6rem',
    padding: '0.3rem 0.5rem',
  };

  return (
    <DownloadResumeBlock
      variants={downloadResumeBlockVariants}
      initial={'closed'}
      animate={isDownloadOpen ? 'open' : 'closed'}
      transition={{ delay: 0.5 }}
    >
      <AnimatePresence>
        {!isDownloadOpen && (
          <DownloadResumeBtnWrapper
            variants={dowloadResumeBtnVariants}
            initial={'initial'}
            animate={'animate'}
            key="downloadResumeBtn"
          >
            <Button
              text={translator('common:download_resume_btn')}
              color={theme.colors.primary}
              textColor={theme.colors.black}
              onClick={setIsDownloadOpen.bind(null, true)}
            />
          </DownloadResumeBtnWrapper>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isDownloadOpen && (
          <>
            <Button
              text="&#10008;"
              onClick={setIsDownloadOpen.bind(null, false)}
              wrapperStyle={closeBtnWrapperStyles}
              buttonStyles={closeBtnStyles}
              key="closeButton"
            />

            <DownloadResumeBtnWrapper
              variants={dowloadResumeBtnVariants}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
              transition={{ delay: 0.5 }}
              key="downloadEnglishResumeBtn"
            >
              <Button
                text="English Resume"
                color={theme.colors.primary}
                textColor={theme.colors.black}
                onClick={onResumeDownload.bind(null, 'english')}
              />
            </DownloadResumeBtnWrapper>

            <DownloadResumeBtnWrapper
              variants={dowloadResumeBtnVariants}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
              transition={{ delay: 0.5 }}
              key="downloadPersianResumeBtn"
            >
              <Button
                text="رزومه فارسی"
                color={theme.colors.primary}
                textColor={theme.colors.black}
                onClick={onResumeDownload.bind(null, 'persian')}
              />
            </DownloadResumeBtnWrapper>
          </>
        )}
      </AnimatePresence>
    </DownloadResumeBlock>
  );
};

export default DownloadResume;
