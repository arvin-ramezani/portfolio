import React, { ChangeEvent, useEffect, useState } from 'react';

import { StyledLangSelectBox } from '@/styles/components/lang-select-box.styled';
import { selectBoxVariants } from './lang-select-box.variants';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Url } from 'url';

const LangSelectBox = () => {
  const router = useRouter();
  const [pageDir, setPageDir] = useState(
    router.locale === 'fa' ? 'rtl' : 'ltr'
  );
  const { t: translatorCommon } = useTranslation('common');

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push('/', '/', { locale: e.target.value });

    // if (e.target.value === 'fa') {
    //   typeof document !== 'undefined' &&
    //     document.body.style.direction === 'rtl';
    //   return;
    // } else {
    //   typeof document !== 'undefined' &&
    //     document.body.style.direction === 'ltr';
    //   return;
    // }
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
    >
      <option value="en">English</option>
      <option value="fa">فارسی</option>
    </StyledLangSelectBox>
  );
};

export default LangSelectBox;
