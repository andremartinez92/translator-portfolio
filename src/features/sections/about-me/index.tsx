import { ABOUT_ME_ID, ABOUT_ME_TITLE_ID } from '@/constants/routes';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import aboutMePic from './about-me.png';
import css from './styles.module.css';

const AboutMe = () => {
  const { t } = useTranslation('home');
  const text = t('aboutMe.text').split('\n');

  return (
    <section id={ABOUT_ME_ID} aria-labelledby={ABOUT_ME_TITLE_ID}>
      <h1 id={ABOUT_ME_TITLE_ID} className={css.h1}>
        {t('aboutMe.title')}
      </h1>
      <div className={css.sectionGrid}>
        <div className={css.content}>
          {text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <Image
          className={css.image}
          src={aboutMePic}
          alt={t('aboutMe.image')}
        />
      </div>
    </section>
  );
};

export default AboutMe;
