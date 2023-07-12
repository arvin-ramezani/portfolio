import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';

import { StyledLangSelectBox } from '@/styles/components/lang-select-box.styled';
import { selectBoxVariants } from './lang-select-box.variants';
import LoadingLanguageSpinner from '../ui/loading-language-spinner/loading-language-spinner';
import { AnimatePresence } from 'framer-motion';

const LangSelectBox = () => {
  const router = useRouter();
  const [loadingLanguage, setLoadingLanguage] = useState(false);

  const onSelectChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    if (router.locale === e.target.value) return;
    setLoadingLanguage(true);

    await router.push('/', '/', { locale: e.target.value });
    setLoadingLanguage(false);
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
    <>
      <AnimatePresence>
        {loadingLanguage && (
          <LoadingLanguageSpinner key="loadingLanguageSpinner" />
        )}
      </AnimatePresence>

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
    </>
  );
};

export default LangSelectBox;
