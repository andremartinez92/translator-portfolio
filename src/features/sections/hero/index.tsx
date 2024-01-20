import { Button } from '@/components/button';
import { CONTACTS_ROUTE, TOP_ID } from '@/constants/routes';
import css from './styles.module.css';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import profilePic from './profile.webp';
import EnFlagIcon from '@/components/icons/en-flag';
import PtFlagIcon from '@/components/icons/pt-flag';
import FrFlagIcon from '@/components/icons/fr-flag';

const TITLE = 'Alice Smith';

const Hero = () => {
  const { replace, pathname, query, asPath } = useRouter();
  const { t } = useTranslation('home');

  const onChangeLocale = useCallback(
    async (locale: string) => {
      await replace({ pathname, query }, asPath, {
        scroll: false,
        locale,
      });
    },
    [replace, pathname, query, asPath]
  );

  return (
    <section
      className={css.heroSection}
      id={TOP_ID}
      aria-label={t('hero.sectionLabel')}
    >
      <div className={css.imageContainer}>
        <Image
          src={profilePic}
          alt={t('hero.photoAlt')}
          className={css.image}
          width={878}
          height={815}
          priority
          placeholder="blur"
          sizes="(max-width: 360px) 360px, (max-width: 480px) 480px, 500px"
        />
        <h1 className={css.heroH1}>{TITLE}</h1>
        <svg className={css.heroRect}>
          <rect />
        </svg>
      </div>
      <p className={css.heroText}>{t('hero.subtitle')}</p>
      <Button variant="bigger" size="lg" asChild className={css.callToAction}>
        <a href={CONTACTS_ROUTE}>{t('hero.callToAction')}</a>
      </Button>
      <div className={css.flagContainer}>
        <Button
          size="icon"
          className={css.flagButton}
          onClick={() => onChangeLocale('en')}
          aria-label="Change language to English"
        >
          <EnFlagIcon className={css.flag} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={css.flagButton}
          onClick={() => onChangeLocale('pt')}
          aria-label="Alterar idioma para Português"
        >
          <PtFlagIcon className={css.flag} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={css.flagButton}
          onClick={() => onChangeLocale('fr')}
          aria-label="Changer la langue en Français"
        >
          <FrFlagIcon className={css.flag} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
