import React from 'react';
import { motion } from 'framer-motion';

import LoadingSpinner from '../loading-spinner/loading-spinner';
import { loadingLanguageSpinnerVariants } from './loading-language-spinner.variants';
import { StyledLoadingLanguageSpinner } from '@/styles/components/ui/loading-language-spinner.styled';

const LoadingLanguageSpinner = () => {
  return (
    <StyledLoadingLanguageSpinner
      as={motion.div}
      variants={loadingLanguageSpinnerVariants}
      initial={'hidden'}
      animate={'show'}
      exit={'hidden'}
    >
      <LoadingSpinner />
    </StyledLoadingLanguageSpinner>
  );
};

export default LoadingLanguageSpinner;
