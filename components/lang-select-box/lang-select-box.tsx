import React from 'react';

import { StyledLangSelectBox } from '@/styles/components/lang-select-box.styled';
import { Variants } from 'framer-motion';

const selectBoxVariants: Variants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 1.3,
  },
};

const LangSelectBox = () => {
  return (
    <StyledLangSelectBox
      variants={selectBoxVariants}
      whileHover={'hover'}
      whileTap={'tap'}
    >
      <option value="us">English</option>
      <option value="fa">فارسی</option>
    </StyledLangSelectBox>
  );
};

export default LangSelectBox;
