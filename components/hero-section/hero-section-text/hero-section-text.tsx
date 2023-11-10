import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { isMobile } from 'react-device-detect';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

import {
  HeroTextContainer,
  StyledCurrentUser,
} from '@/styles/components/hero-section.styled';
import { heroTextVariants } from '../hero-section.variants';
import Button from '@/components/ui/button/button';
import { theme } from '@/styles/themes/theme.styled';

interface HeroSectionProps {
  pageDir: 'rtl' | 'ltr';
}

const HeroSectionText: FC<HeroSectionProps> = ({ pageDir }) => {
  const { t: translator } = useTranslation();
  const router = useRouter();

  const { data: userData, status } = useSession();
  const isSignedIn = status === 'authenticated';

  const onCall = () => {
    if (isMobile) {
      window.open('tel:+989361599686');

      return;
    }

    router.push('/#contact');
  };

  return (
    <HeroTextContainer
      variants={heroTextVariants}
      initial="hidden"
      animate="visible"
      custom={pageDir}
    >
      {isSignedIn ? (
        <StyledCurrentUser>
          <h1>
            Welcome <span>{userData?.user?.email}</span>
          </h1>
          {userData?.user?.image && (
            <div>
              <Image
                src={userData?.user?.image}
                alt="User"
                width={100}
                height={100}
              />
            </div>
          )}
        </StyledCurrentUser>
      ) : (
        <h1>
          {translator('home:hero_section_heading')}{' '}
          <span>{translator('home:hero_section_heading_arvin_ramezani')}</span>
          {pageDir === 'rtl' && ' هستم'}
        </h1>
      )}

      <h2>{translator('home:hero_section_sub_heading_1')}</h2>
      <p>{translator('home:hero_section_sub_heading_2')}</p>

      {pageDir === 'ltr' && (
        <p>{translator('home:hero_section_sub_heading_3')}</p>
      )}

      <Button
        text={`${translator('common:call_me_btn')}${
          pageDir === 'rtl' ? 'بگیرید' : ''
        }`}
        onClick={onCall}
        color={theme.colors.primary}
        textColor={theme.colors.black}
      />
    </HeroTextContainer>
  );
};

export default HeroSectionText;
