import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import clsx from 'clsx';
import { Lobster, Raleway } from 'next/font/google';

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lobster',
});

const raleway = Raleway({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});

const FONTS_CLASS = clsx(raleway.variable, lobster.variable);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={FONTS_CLASS}>
      <Component {...pageProps} />
    </div>
  );
}
