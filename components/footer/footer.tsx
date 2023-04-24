import Image from 'next/image';
import Link from 'next/link';
import React, { FormEvent, useRef } from 'react';
import { Variants, useInView } from 'framer-motion';
import { CSSProperties } from 'styled-components';

import {
  ContactBlock,
  ContactTitle,
  EmailBlock,
  LocationBlock,
  SendEmailBlock,
  SendEmailForm,
  SendEmailTitle,
  SocialMediaBlock,
  StyledFooter,
  StyledInput,
  StyledTextarea,
} from '@/styles/components/footer.styled';
import { Container } from '@/styles/global.styled';
import Button from '../common/button/button';
import { theme } from '@/styles/theme.styled';
import StarsCanvas from '../stars-canvas/stars-canvas';

const footerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const footerItemsVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 1.8,
      delay: 0.6,
    },
  },
};

const Footer = () => {
  const sendEmailRef = useRef(null);
  const contactRef = useRef(null);
  const isEmailInView = useInView(sendEmailRef);
  const isContactInView = useInView(contactRef);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const starsCanvasStyles: CSSProperties = {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
  };

  return (
    <StyledFooter>
      <StarsCanvas styles={starsCanvasStyles} />

      <Container
        variants={footerContainerVariants}
        initial="hidden"
        animate={'visible'}
        // animate={isInView ? 'visible' : 'hidden'}
        exit="hidden"
      >
        <SendEmailBlock
          variants={footerItemsVariants}
          ref={sendEmailRef}
          initial="hidden"
          animate={isEmailInView ? 'visible' : 'hidden'}
          exit="hidden"
        >
          <SendEmailTitle>Send Email</SendEmailTitle>

          <SendEmailForm onSubmit={onSubmit}>
            <StyledInput
              placeholder="* Your Name"
              required
            />
            <StyledInput
              type="email"
              placeholder="* Your Email"
              required
            />

            <StyledTextarea
              rows={4}
              placeholder="* Your Message"
              required
            />

            <Button
              text="Submit"
              color={theme.colors.textPrimary}
              textColor={theme.colors.black}
              wrapperStyle={{ marginTop: '1.4rem', width: '100%' }}
            />
            {/* <div style={}></div> */}
          </SendEmailForm>
        </SendEmailBlock>
        <ContactBlock
          variants={footerItemsVariants}
          ref={contactRef}
          initial="hidden"
          animate={isContactInView ? 'visible' : 'hidden'}
          exit="hidden"
        >
          <ContactTitle>Contact</ContactTitle>

          <EmailBlock>
            <Image
              src="/images/icons/phone.svg"
              alt="Phone Icon"
              width={32}
              height={32}
            />
            <p>+98 936 159 9686</p>
          </EmailBlock>

          <EmailBlock>
            <Image
              src="/images/icons/mail-icon.svg"
              alt="Email Icon"
              width={32}
              height={32}
            />
            <p>a.plus.webb@gmail.com</p>
          </EmailBlock>

          <LocationBlock>
            <Image
              src="/images/icons/location.svg"
              alt="Location Icon"
              width={28}
              height={46}
            />

            <p>Iran / Mazandaran / Babolsar</p>
          </LocationBlock>

          <SocialMediaBlock>
            <Link
              href="https://www.linkedin.com/in/arvin-ramezani"
              passHref
              legacyBehavior
            >
              <Image
                src="/images/icons/linkedIn.svg"
                alt="LinkedIn Logo"
                width={32}
                height={32}
              />
            </Link>
            <Link
              href="https://github.com/A-Plus-web"
              passHref
              legacyBehavior
            >
              <Image
                src="/images/icons/github.svg"
                alt="LinkedIn Logo"
                width={32}
                height={32}
              />
            </Link>
            <Link
              href="https://wa.me/989361599686"
              passHref
              legacyBehavior
            >
              <Image
                src="/images/icons/whatsapp.svg"
                alt="LinkedIn Logo"
                width={32}
                height={32}
              />
            </Link>
            <Link
              href="https://t.me/Arvinrmz"
              passHref
              legacyBehavior
            >
              <Image
                src="/images/icons/telegram.svg"
                alt="LinkedIn Logo"
                width={32}
                height={32}
              />
            </Link>
            <Link
              href="https://twitter.com/a_plus_webb"
              passHref
              legacyBehavior
            >
              <Image
                src="/images/icons/twitter.svg"
                alt="LinkedIn Logo"
                width={42}
                height={42}
              />
            </Link>
          </SocialMediaBlock>
          <Button
            text="Call me"
            color={theme.colors.primary}
            textColor={theme.colors.black}
            wrapperStyle={{ marginTop: '1.4rem', width: '100%' }}
          />
        </ContactBlock>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
