import clsx from 'clsx';
import type { MouseEventHandler, ReactNode } from 'react';
import css from './styles.module.css';

interface Props {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const NavbarLink = ({ href, className, children, onClick }: Props) => {
  const classes = clsx([css.navbarLink, className]);

  return (
    <a
      role="menuitem"
      aria-expanded="false"
      aria-haspopup="true"
      href={href}
      tabIndex={0}
      className={classes}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default NavbarLink;
