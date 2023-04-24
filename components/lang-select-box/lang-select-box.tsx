import React from 'react';

import { StyledLangSelectBox } from '@/styles/components/lang-select-box.styled';
import { selectBoxVariants } from './lang-select-box.variants';

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
