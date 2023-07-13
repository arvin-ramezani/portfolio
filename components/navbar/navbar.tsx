import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

import {
  ActiveNavItemStyle,
  StyledNavbar,
} from '@/styles/components/navbar.styled';
import { NAV_LIST } from '@/utils/data/navigation.data';

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState('/');
  const router = useRouter();
  const { t: translator } = useTranslation();

  const onNavItemClick = (path: string) => setCurrentPath(path);

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router.locale]);

  return (
    <StyledNavbar>
      <ul>
        {NAV_LIST.map((item) => (
          <li
            key={item.name}
            onClick={onNavItemClick.bind(null, item.href)}
          >
            <Link href={item.href}>
              {translator(`common:${item.translatorName}`)}
            </Link>

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
  );
};

export default Navbar;
