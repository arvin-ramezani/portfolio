import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

import {
  ActiveNavItemStyle,
  StyledNavbar,
} from '@/styles/components/navbar.styled';
import { NAV_LIST } from '@/utils/data/navigation.data';
import GoToUp from '../ui/go-to-up/go-to-up';

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState('');
  const router = useRouter();
  const { t: translator } = useTranslation();

  const onNavItemClick = (newHash: string) => {
    router
      .replace(
        {
          pathname: window.location.pathname,
          hash: newHash,
          query: window.location.search,
        },
        undefined,
        { shallow: true }
      )
      .catch((e) => {
        if (!e.cancelled) {
          throw e;
        }
      });
    setCurrentPath(newHash);
  };

  useEffect(() => {
    setCurrentPath('');
  }, [router.locale]);

  return (
    <>
      <StyledNavbar>
        <ul>
          {NAV_LIST.map((item) => (
            <li
              key={item.name}
              onClick={onNavItemClick.bind(null, item.href)}
            >
              {translator(`common:${item.translatorName}`)}

              {currentPath === item.href && (
                <ActiveNavItemStyle
                  as={motion.span}
                  layoutId="activeNavItem"
                />
              )}
            </li>
          ))}
        </ul>
      </StyledNavbar>

      <GoToUp onClick={onNavItemClick.bind(null, '')} />
    </>
  );
};

export default Navbar;
