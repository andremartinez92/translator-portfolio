import { Button } from '@/components/button';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default function Custom404() {
  const { t } = useTranslation('home');

  return (
    <div className="flex items-center justify-center flex-col h-[100svh] text-center gap-8">
      <h1 className="no-underline">{t('notFound.title')}</h1>
      <Button variant="bigger" size="lg" asChild>
        <Link href="/">{t('notFound.link')}</Link>
      </Button>
    </div>
  );
}
