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
import Image from 'next/image';
import Link from 'next/link';
import React, { FormEvent } from 'react';
import Button from '../common/button';
import { theme } from '@/styles/theme.styled';

const Footer = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <StyledFooter>
      <Container>
        <SendEmailBlock>
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
              color={theme.colors.primary}
              textColor={theme.colors.black}
              wrapperStyle={{ marginTop: '1.4rem', width: '100%' }}
            />
            {/* <div style={}></div> */}
          </SendEmailForm>
        </SendEmailBlock>
        <ContactBlock>
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
        </ContactBlock>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
