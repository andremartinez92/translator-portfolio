import { useEffect, useRef } from 'react';
import { Options, Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import css from './styles.module.css';
import useTranslation from 'next-translate/useTranslation';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/card';

export type Comment = {
  comment: string;
  name: string;
  description: string;
};

const MAIN_OPTIONS: Options = {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  easing: 'ease-in-out',
  updateOnMove: true,
  gap: '24px',
  pagination: false,
  classes: {
    arrows: `splide__arrows ${css.arrows}`,
    arrow: `splide__arrow ${css.arrow}`,
  },
};

const CommentsCarousel = ({ comments }: { comments: Array<Comment> }) => {
  const { t } = useTranslation('home');
  const mainRef = useRef<Splide>(null);
  const thumbRef = useRef<Splide>(null);

  useEffect(() => {
    if (thumbRef?.current?.splide) {
      mainRef?.current?.sync(thumbRef.current.splide);
    }
  }, []);

  return (
    <div className={css.commentsCarousel}>
      <Splide
        options={MAIN_OPTIONS}
        aria-label={t('components.carouselLabel')}
        role="region"
        ref={mainRef}
      >
        {comments.map(({ name, comment, description }) => (
          <SplideSlide key={comment}>
            <Card className={css.card}>
              <CardHeader>
                <CardTitle className={css.cardTitle}>{comment}</CardTitle>
              </CardHeader>
              <CardFooter className={css.cardFooter}>
                <p className={css.cardFooterText}>
                  {name} - {description}
                </p>
              </CardFooter>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default CommentsCarousel;
