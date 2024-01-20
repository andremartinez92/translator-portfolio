import { EXPERIENCE_ID, EXPERIENCE_TITLE_ID } from '@/constants/routes';
import useTranslation from 'next-translate/useTranslation';
import upworkImage from './upwork.webp';
import prozImage from './proz.webp';
import linkedInImage from './linkedin.webp';
import aptradImage from './aptrad.webp';
import Image from 'next/image';
import { Button } from '@/components/button';
import css from './styles.module.css';
import CommentsCarousel, { Comment } from './comments-carousel';

const IMAGES = [
  {
    image: upworkImage,
    alt: 'Upwork',
    href: 'https://upwork.com/',
  },
  {
    image: prozImage,
    alt: 'ProZ',
    href: 'http://www.proz.com/',
  },
  {
    image: linkedInImage,
    alt: 'LinkedIn',
    href: 'https://www.linkedin.com/',
  },
  {
    image: aptradImage,
    alt: 'APTRAD',
    href: 'https://aptrad.pt/',
  },
];

const Experience = () => {
  const { t } = useTranslation('home');
  const paragraphs = t('experience.text').split('\n');
  const comments: Array<Comment> = t(
    'experience.comments',
    {},
    { returnObjects: true }
  );

  return (
    <section id={EXPERIENCE_ID} aria-labelledby={EXPERIENCE_TITLE_ID}>
      <h1 id={EXPERIENCE_TITLE_ID} className={css.h1}>
        {t('experience.title')}
      </h1>
      <div className={css.sectionGrid}>
        <div className={css.contentText}>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className={css.commentsSection}>
          <div>
            <h2>{t('experience.commentsTitle')}</h2>
            <CommentsCarousel comments={comments} />
          </div>
          <div>
            <h2>{t('experience.connectionsTitle')}</h2>
            <div className={css.connections}>
              {IMAGES.map(({ image, alt, href }) => (
                <Button
                  asChild
                  key={alt}
                  variant="ghost"
                  size="icon"
                  className={css.connectionButton}
                >
                  <a href={href}>
                    <Image
                      src={image}
                      alt={alt}
                      className={css.connectionImage}
                    />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
