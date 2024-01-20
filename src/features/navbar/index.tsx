import { CONTACTS_ROUTE, TOP_ROUTE, getLinksData } from '@/constants/routes';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select';
import css from './styles.module.css';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import useAnimationState, { AnimationState } from '@/hooks/use-animation-state';
import EnFlagIcon from '@/components/icons/en-flag';
import PtFlagIcon from '@/components/icons/pt-flag';
import FrFlagIcon from '@/components/icons/fr-flag';
import { Button } from '@/components/button';
import NavbarBurger from '@/components/navbar-burger';
import NavbarLink from '@/components/navbar-link';
import { cn } from '@/lib/utils';

const { OPEN, CLOSING, CLOSED } = AnimationState;

const Navbar = () => {
  const { locale, pathname, query, asPath, replace } = useRouter();
  const { t } = useTranslation('home');

  const { animationState, goToNextState, onAnimationEnd } =
    useAnimationState(CLOSED);

  const onClickNavbarLink = () => {
    if (animationState === OPEN) {
      goToNextState();
    }
    return true;
  };

  const linksData = getLinksData(t);

  const onClickBurger = () => {
    // Don't trigger during closing animation
    if (animationState === OPEN || animationState === CLOSED) {
      goToNextState();
    }
  };

  const classes = cn({
    [css.navbar]: true,
    [css.navbarOpen]: animationState === OPEN,
    [css.navbarClosing]: animationState === CLOSING,
  });

  return (
    <nav
      aria-label={t('navigation.sectionLabel')}
      className={classes}
      id="navbar"
      onAnimationEnd={onAnimationEnd}
    >
      <span className={css.title}>
        <a className={css.titleAnchor} href={TOP_ROUTE}>
          Alice Smith
        </a>
      </span>

      <div className={css.selectContainer}>
        <Select
          value={locale}
          onValueChange={(value) =>
            replace({ pathname, query }, asPath, {
              scroll: false,
              locale: value,
            })
          }
        >
          <SelectTrigger
            aria-label={t('navigation.languageSelect')}
            className={css.selectTrigger}
          >
            <SelectValue defaultValue={locale} />
          </SelectTrigger>
          <SelectContent className={css.selectContent} align="center">
            <SelectItem value="en" className={css.selectContent}>
              <EnFlagIcon className={css.flag} />
            </SelectItem>

            <SelectItem value="pt" className={css.selectContent}>
              <PtFlagIcon className={css.flag} />
            </SelectItem>

            <SelectItem value="fr" className={css.selectContent}>
              <FrFlagIcon className={css.flag} />
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <NavbarBurger
        className={css.burger}
        ariaControls="main-menu"
        isOpen={animationState === OPEN}
        onClick={onClickBurger}
      />
      <div className={css.navLinks} id="nav-links">
        <ul
          id="main-menu"
          role="menubar"
          aria-label={t('navigation.navLinks')}
          className={css.navbarUl}
        >
          {linksData.map(({ href, name }) => (
            <li role="none" key={href}>
              <NavbarLink
                className={css.navbarLink}
                href={href}
                onClick={onClickNavbarLink}
              >
                {name}
              </NavbarLink>
            </li>
          ))}
          <li role="none" className={css.anchorLi}>
            <Button asChild className={css.anchorButton}>
              <a
                href={CONTACTS_ROUTE}
                role="menuitem"
                onClick={onClickNavbarLink}
              >
                {t('navigation.callToAction')}
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
