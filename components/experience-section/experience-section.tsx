import {
  ExperienceContainer,
  ExperienceItemAddress,
  ExperienceItemBulletList,
  ExperienceItemCompany,
  ExperienceItemTitle,
  StyledExperienceTitle,
} from '@/styles/components/experience-section.styled';
import { Container } from '@/styles/global.styled';
import Image from 'next/image';

export interface ExperienceSectionProps {}

const ExperienceSection: React.FC<ExperienceSectionProps> = (_props) => {
  return (
    <section>
      <ExperienceContainer>
        <StyledExperienceTitle>Experiences</StyledExperienceTitle>
        <div>
          <ExperienceItemCompany
            href="https://madaar.ae"
            target="_blank"
          >
            <Image
              src="/images/madaar.png"
              alt="Madaar al zaki logo"
              width={59}
              height={64}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                marginTop: '-12px',
              }}
            />
            <div>
              <ExperienceItemTitle>
                <h3>Madaar al zaki</h3>
                <time>Nov 2023</time> / <time>Aut 2024</time>
              </ExperienceItemTitle>

              <p>Front End Developer</p>

              <ExperienceItemAddress>
                <address>Dubai, United Arab Emirates</address>
                <span>-</span>
                <span>Remote</span>
              </ExperienceItemAddress>
            </div>
          </ExperienceItemCompany>

          <ExperienceItemBulletList>
            <li>
              <Image
                src="/images/icons/check.svg"
                alt="Check Icon"
                width={16}
                height={16}
              />
              Developed the front end of a site using TailwindCSS, Next.js,
              TypeScript, and Framer Motion.
            </li>

            <li>
              <Image
                src="/images/icons/check.svg"
                alt="Check Icon"
                width={16}
                height={16}
              />
              Implemented state management using Zustand and form validation
              with ZOD and react-hook-form.
            </li>

            <li>
              <Image
                src="/images/icons/check.svg"
                alt="Check Icon"
                width={16}
                height={16}
              />
              Integrated user registration and login with NextAuth.js.
            </li>

            <li>
              <Image
                src="/images/icons/check.svg"
                alt="Check Icon"
                width={16}
                height={16}
              />
              Contributed to the backend development of the project, which was
              built with PostgreSQL and Nest.js.
            </li>
          </ExperienceItemBulletList>
        </div>
      </ExperienceContainer>
    </section>
  );
};

export default ExperienceSection;
