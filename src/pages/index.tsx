import AboutMe from '@/features/sections/about-me';
import Contacts from '@/features/sections/contacts';
import Experience from '@/features/sections/experience';
import Footer from '@/features/footer';
import Hero from '@/features/sections/hero';
import Navbar from '@/features/navbar';
import Services from '@/features/sections/services';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* start favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#17424e"
        />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
        {/* end favicon */}
        <meta charSet="utf-8" />
        {/* <meta
          name='google-site-verification'
          content='placeholder'
        /> */}
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta
          property="og:image"
          content="https://alice-smith-fake-portfolio.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.c3960cda.png&w=1920&q=75"
        />
        <meta
          property="og:url"
          content="https://alice-smith-fake-portfolio.netlify.app"
        />
        <meta property="og:type" content="website" />
        <link
          rel="alternate"
          hrefLang="pt"
          href="https://alice-smith-fake-portfolio.netlify.app/pt/"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://alice-smith-fake-portfolio.netlify.app/fr/"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://alice-smith-fake-portfolio.netlify.app"
        />
      </Head>
      <Navbar />
      <main role="main">
        <Hero />
        <AboutMe />
        <Services />
        <Experience />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
