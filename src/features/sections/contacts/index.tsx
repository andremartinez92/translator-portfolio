import { Button } from '@/components/button';
import { CONTACTS_ID, CONTACTS_TITLE_ID } from '@/constants/routes';
import useTranslation from 'next-translate/useTranslation';
import css from './styles.module.css';
import Link from 'next/link';
import EmailIcon from '@/components/icons/email-icon';
import PhoneIcon from '@/components/icons/phone-icon';
import ContactForm from './contact-form';

const Contacts = () => {
  const { t } = useTranslation('home');

  return (
    <section id={CONTACTS_ID} aria-labelledby={CONTACTS_TITLE_ID}>
      <h1 id={CONTACTS_TITLE_ID} className={css.h1}>
        {t('contacts.title')}
      </h1>
      <div className={css.sectionGrid}>
        <div className={css.contacts}>
          <p className={css.contactsText}>{t('contacts.text')}</p>
          <address className={css.links}>
            <Button asChild variant="link" className={css.buttonLink}>
              <Link href="mailto:alicesmith@gmailvn.com" className={css.link}>
                <EmailIcon />
                alicesmith@gmailvn.com
              </Link>
            </Button>
            <Button asChild variant="link" className={css.buttonLink}>
              <Link href="tel:999999999" className={css.link}>
                <PhoneIcon />
                999 999 999
              </Link>
            </Button>
          </address>
        </div>

        <ContactForm className={css.form} />
      </div>
    </section>
  );
};

export default Contacts;
