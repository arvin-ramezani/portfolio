import React from 'react';

import { StyledLangSelectBox } from '@/styles/components/lang-select-box';

const LangSelectBox = () => {
  return (
    <StyledLangSelectBox>
      <option value='us'>English</option>
      <option value='fa'>فارسی</option>
    </StyledLangSelectBox>
  );
};

export default LangSelectBox;
