import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

import { StyledLangSelectBox } from '@/styles/components/lang-select-box.styled';
import { selectBoxVariants } from './lang-select-box.variants';
import Image from 'next/image';

const LangSelectBox = () => {
  const router = useRouter();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (router.locale === e.target.value) return;

    router.push('/', '/', { locale: e.target.value });
  };

  useEffect(() => {
    if (router.locale === 'fa') {
      if (typeof document !== 'undefined') {
        document.body.style.direction = 'rtl';
        document.body.style.fontFamily = 'Vazir';
      }
    } else {
      if (typeof document !== 'undefined') {
        document.body.style.direction = 'ltr';
        document.body.style.fontFamily = 'Roboto';
      }
    }
  }, [router.locale]);

  return (
    <StyledLangSelectBox
      variants={selectBoxVariants}
      whileHover={'hover'}
      whileTap={'tap'}
      onChange={onSelectChange}
      defaultValue={router.locale}
      direction={router.locale === 'fa' ? 'rtl' : 'ltr'}
    >
      <option value="en">English</option>
      <option value="fa">فارسی</option>
    </StyledLangSelectBox>
  );
};

export default LangSelectBox;
