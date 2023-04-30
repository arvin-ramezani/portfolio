import { NextFont } from 'next/dist/compiled/@next/font';
import Image from 'next/image';
import Link from 'next/link';
import React, { FormEvent, useEffect, useRef, useState, FC } from 'react';
import { useInView } from 'framer-motion';
import { CSSProperties } from 'styled-components';
import { useRouter } from 'next/router';

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
import Button from '../ui/button/button';
import { theme } from '@/styles/theme.styled';
import StarsCanvas from '../stars-canvas/stars-canvas';
import { footerItemsVariants } from './footer.variants';

const Footer = () => {
  const sendEmailRef = useRef(null);
  const contactRef = useRef(null);
  const isEmailInView = useInView(sendEmailRef);
  const isContactInView = useInView(contactRef);
  const userNameRef = useRef<HTMLInputElement>(null);
  const userEmailRef = useRef<HTMLInputElement>(null);
  const userMessageRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [emailLoading, setEmailLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      userNameRef.current?.value.trim().length === 0 ||
      userEmailRef.current?.value.trim().length === 0 ||
      userMessageRef.current?.value.trim().length === 0
    )
      return;

    const form = e.currentTarget;
    form.enctype = 'text/plain';
    form.target = '_blank';
    form.method = 'POST';
    form.action = `mailto:a.plus.rmz@gmail.com?subject=Message from ${userEmailRef.current?.value} (${userNameRef.current?.value})&body=${userMessageRef.current?.value}`;

    form.submit();
  };

  const starsCanvasStyles: CSSProperties = {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
  };

  return (
    <StyledFooter
    // className={myVazirFont.className}
    >
      <StarsCanvas styles={starsCanvasStyles} />

      <Container
      // variants={footerContainerVariants}
      // initial="hidden"
      // animate={'visible'}
      // exit="hidden"
      >
        <ContactBlock
          id={'contact'}
          variants={footerItemsVariants}
          ref={contactRef}
          initial="hidden"
          animate={isContactInView ? 'visible' : 'hidden'}
          exit="hidden"
          pagedir={'rtl'}
        >
          <ContactTitle pagedir={'rtl'}>تماس با من</ContactTitle>

          <EmailBlock
            id="phoneBlock"
            pagedir={'rtl'}
            onClick={() => {
              if (typeof window !== 'undefined')
                window.open('tel:+989361599686');
            }}
          >
            <Image
              src="/images/icons/phone.svg"
              alt="Phone Icon"
              width={32}
              height={32}
            />
            <p>+98 936 159 9686</p>
          </EmailBlock>

          <EmailBlock pagedir={'rtl'}>
            <Image
              src="/images/icons/mail-icon.svg"
              alt="Email Icon"
              width={32}
              height={32}
            />
            <p>a.plus.webb@gmail.com</p>
          </EmailBlock>

          <LocationBlock pagedir={'rtl'}>
            <Image
              src="/images/icons/location.svg"
              alt="Location Icon"
              width={28}
              height={46}
            />

            <p>ایران / مازندران / بابلسر</p>
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
        </ContactBlock>

        <SendEmailBlock
          variants={footerItemsVariants}
          ref={sendEmailRef}
          initial="hidden"
          animate={isEmailInView ? 'visible' : 'hidden'}
          exit="hidden"
        >
          <SendEmailTitle>ارسال ایمیل</SendEmailTitle>

          <SendEmailForm
            onSubmit={onSubmit}
            encType="multipart/form-data "
            ref={formRef}
          >
            <StyledInput
              ref={userNameRef}
              placeholder={`* نام شما `}
              required
              name="name"
            />
            <StyledInput
              ref={userEmailRef}
              type="email"
              placeholder={`* ایمیل شما`}
              required
              name="email"
            />

            <StyledTextarea
              ref={userMessageRef}
              rows={4}
              placeholder={`* پیام شما`}
              required
              name="message"
            />

            {/* <Button
              text={'ارسال'}
              color={theme.colors.textPrimary}
              textColor={theme.colors.black}
              wrapperStyle={{
                marginTop: '1.4rem',
                width: '100%',
              }}
            /> */}
            <Button
              // text={translatorCommon('call_me_btn')}
              text={'ارسال'}
              color={theme.colors.primary}
              textColor={theme.colors.black}
              wrapperStyle={{
                marginTop: '1.4rem',
                width: '100%',
              }}
              loading={emailLoading}
            />
          </SendEmailForm>
        </SendEmailBlock>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
