import css from './styles.module.css';
import clsx from 'clsx';
import useTranslation from 'next-translate/useTranslation';
import type { MouseEventHandler } from 'react';

interface Props {
  className?: string;
  ariaControls: string;
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const NavbarBurger = ({
  className = '',
  ariaControls,
  isOpen,
  onClick,
}: Props) => {
  const { t } = useTranslation('home');

  const classes = clsx({
    [css.burger]: true,
    [className]: true,
    [css.burgerOpen]: isOpen,
  });

  return (
    <button
      type="button"
      id="navbar-burger"
      className={classes}
      aria-label={isOpen ? t('navigation.closeNav') : t('navigation.openNav')}
      aria-controls={ariaControls}
      onClick={onClick}
    >
      <div className={css.burgerLine1}></div>
      <div className={css.burgerLine2}></div>
      <div className={css.burgerLine3}></div>
    </button>
  );
};

export default NavbarBurger;
