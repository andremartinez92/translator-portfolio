import { SERVICES_ID, SERVICES_TITLE_ID } from '@/constants/routes';
import useTranslation from 'next-translate/useTranslation';
import css from './styles.module.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { Translate } from 'next-translate';
import TrainingIcon from '@/components/icons/training-icon';
import TranslationIcon from '@/components/icons/translation-icon';
import SubtitlesIcon from '@/components/icons/subtitles-icon';
import LocalizationIcon from '@/components/icons/localization-icon';
import AdaptationIcon from '@/components/icons/adaptation-icon';

const getCardInfo = (t: Translate) => {
  return [
    {
      key: 'training',
      Icon: TrainingIcon,
      title: t('services.training.title'),
      description: t('services.training.description'),
    },
    {
      key: 'translation',
      Icon: TranslationIcon,
      title: t('services.translation.title'),
      description: t('services.translation.description'),
    },
    {
      key: 'subtitles',
      Icon: SubtitlesIcon,
      title: t('services.subtitles.title'),
      description: t('services.subtitles.description'),
    },
    {
      key: 'localization',
      Icon: LocalizationIcon,
      title: t('services.localization.title'),
      description: t('services.localization.description'),
    },
    {
      key: 'adaptation',
      Icon: AdaptationIcon,
      title: t('services.adaptation.title'),
      description: t('services.adaptation.description'),
    },
  ];
};

const Services = () => {
  const { t } = useTranslation('home');
  const cardInfo = getCardInfo(t);

  return (
    <section
      id={SERVICES_ID}
      className={css.section}
      aria-labelledby={SERVICES_TITLE_ID}
    >
      <h1 id={SERVICES_TITLE_ID} className={css.h1}>
        {t('services.title')}
      </h1>
      <div className={css.cardContainer}>
        {cardInfo.map(({ key, Icon, title, description }) => {
          return (
            <Card key={key} className={css.card}>
              <CardHeader className={css.cardHeader}>
                <Icon className={css.icon} />
                <CardTitle className={css.cardTitle}>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={css.description}>{description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
