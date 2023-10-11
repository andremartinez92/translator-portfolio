import { Translate } from 'next-translate';

export const TOP_ID = 'top';
export const TOP_ROUTE = '#';

export const ABOUT_ME_ID = 'about-me';
export const ABOUT_ME_ROUTE = `#${ABOUT_ME_ID}`;
export const ABOUT_ME_TITLE_ID = `${ABOUT_ME_ID}-title`;

export const SERVICES_ID = 'services';
export const SERVICES_ROUTE = `#${SERVICES_ID}`;
export const SERVICES_TITLE_ID = `${SERVICES_ID}-title`;

export const EXPERIENCE_ID = 'experience';
export const EXPERIENCE_ROUTE = `#${EXPERIENCE_ID}`;
export const EXPERIENCE_TITLE_ID = `${EXPERIENCE_ID}-title`;

export const CONTACTS_ID = 'contacts';
export const CONTACTS_ROUTE = `#${CONTACTS_ID}`;
export const CONTACTS_TITLE_ID = `${CONTACTS_ID}-title`;

export type LinkData = { href: string; name: string };

export const getLinksData = (t: Translate): LinkData[] => [
  { href: TOP_ROUTE, name: t('navigation.top') },
  { href: ABOUT_ME_ROUTE, name: t('navigation.aboutMe') },
  { href: SERVICES_ROUTE, name: t('navigation.services') },
  { href: EXPERIENCE_ROUTE, name: t('navigation.experience') },
  { href: CONTACTS_ROUTE, name: t('navigation.contacts') },
];
