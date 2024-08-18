import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import {
  ExperienceContainer,
  ExperienceItemAddress,
  ExperienceItemBulletList,
  ExperienceItemCompany,
  ExperienceItemTitle,
  StyledExperienceTitle,
} from '@/styles/components/experience-section.styled';

export interface ExperienceSectionProps {}

const ExperienceSection: React.FC<ExperienceSectionProps> = (_props) => {
  const { t: translator } = useTranslation();
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
                <h3>{translator('home:experiences_madaar_company')}</h3>
                <time>
                  {translator('home:experiences_madaar_start_date')}
                </time>{' '}
                / <time>{translator('home:experiences_madaar_end_date')}</time>
              </ExperienceItemTitle>

              <p>{translator('home:experiences_madaar_position')}</p>

              <ExperienceItemAddress
                dangerouslySetInnerHTML={{
                  __html: `${translator('home:experiences_madaar_address')}`,
                }}
              ></ExperienceItemAddress>
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

              <span
                dangerouslySetInnerHTML={{
                  __html: `${translator('home:experiences_madaar_list_1')}`,
                }}
              />
            </li>

            <li>
              <Image
                src="/images/icons/check.svg"
                alt="Check Icon"
                width={16}
                height={16}
              />

              <span
                dangerouslySetInnerHTML={{
                  __html: `${translator('home:experiences_madaar_list_2')}`,
                }}
              />
            </li>

            <li>
              <Image
                src="/images/icons/check.svg"
                alt="Check Icon"
                width={16}
                height={16}
              />

              <span
                dangerouslySetInnerHTML={{
                  __html: `${translator('home:experiences_madaar_list_3')}`,
                }}
              />
            </li>

            <li>
              <Image
                src="/images/icons/check.svg"
                alt="Check Icon"
                width={16}
                height={16}
              />

              <span
                dangerouslySetInnerHTML={{
                  __html: `${translator('home:experiences_madaar_list_4')}`,
                }}
              />
            </li>
          </ExperienceItemBulletList>
        </div>
      </ExperienceContainer>
    </section>
  );
};

export default ExperienceSection;
