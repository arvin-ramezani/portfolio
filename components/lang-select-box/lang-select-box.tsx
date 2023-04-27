import { useRouter } from 'next/router';
import React, { ChangeEvent } from 'react';

import { StyledLangSelectBox } from '@/styles/components/lang-select-box.styled';
import { selectBoxVariants } from './lang-select-box.variants';

const LangSelectBox = () => {
  const router = useRouter();
  // const [pageDir, setPageDir] = useState(
  //   router.locale === 'fa' ? 'rtl' : 'ltr'
  // );
  // const { t: translatorCommon } = useTranslation('common');

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    return;

    if (router.locale === e.target.value) return;

    router.push('/', '/', { locale: e.target.value });
  };

  // useEffect(() => {
  //   if (router.locale === 'fa') {
  //     if (typeof document !== 'undefined') {
  //       document.body.style.direction = 'rtl';
  //       document.body.style.fontFamily = 'Vazir';
  //     }
  //   } else {
  //     if (typeof document !== 'undefined') {
  //       document.body.style.direction = 'ltr';
  //       document.body.style.fontFamily = 'Roboto';
  //     }
  //   }
  // }, [router.locale]);

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
