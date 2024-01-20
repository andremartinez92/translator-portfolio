import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Textarea } from '@/components/textarea';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Label } from '@radix-ui/react-label';
import useTranslation from 'next-translate/useTranslation';
import { ChangeEvent, FormEvent, useState } from 'react';
import css from './styles.module.css';
import clsx from 'clsx';
import { checkEmailValidity } from '@/lib/check-email-validity';

const FORM_NAME = 'alice-smith-portfolio';
type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = ({ className }: { className?: string }) => {
  const { t } = useTranslation('home');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const resetInfoMessage = () => {
    setIsSuccess(false);
    setError(null);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    resetInfoMessage();
    setFormData((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    resetInfoMessage();
    setFormData((prev) => ({ ...prev, message: e.target.value }));
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    resetInfoMessage();
    setFormData((prev) => ({ ...prev, email: e.target.value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    resetInfoMessage();

    if (!formData.name || !formData.email || !formData.message) {
      setIsSubmitting(false);
      setError('all fields must be filled.');
      return;
    }

    if (!checkEmailValidity(formData.email)) {
      setIsSubmitting(false);
      setError('the email provided is not valid.');
      return;
    }

    const submitData = {
      ...formData,
      'form-name': FORM_NAME,
    };

    fetch('/', {
      method: 'POST',
      body: new URLSearchParams(submitData).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(() => setIsSuccess(true))
      .catch((e) => setError(e || 'error submitting the form.'))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <form
      onSubmit={onSubmit}
      className={clsx(css.form, className)}
      data-netlify="true"
      name={FORM_NAME}
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <div className={css.inputContainer}>
        <Label className={css.label} htmlFor="name">
          {t('contacts.form.name.label')}
        </Label>
        <Input
          id="name"
          name="name"
          placeholder={t('contacts.form.name.placeholder')}
          value={formData.name}
          onChange={handleNameChange}
        />
      </div>
      <div className={css.inputContainer}>
        <Label className={css.label} htmlFor="email">
          {t('contacts.form.email.label')}
        </Label>
        <Input
          id="email"
          name="email"
          placeholder={t('contacts.form.email.placeholder')}
          value={formData.email}
          onChange={handleEmailChange}
        />
      </div>
      <div className={css.inputContainer}>
        <Label className={css.label} htmlFor="message">
          {t('contacts.form.message.label')}
        </Label>
        <Textarea
          placeholder={t('contacts.form.message.placeholder')}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleMessageChange}
        />
      </div>

      <p
        className={
          isSuccess
            ? css.successMessage
            : error
            ? css.visibleError
            : css.hiddenMessage
        }
      >
        {isSuccess
          ? 'Form submitted successfully!'
          : error
          ? `Error: ${error}`
          : 'No message'}
      </p>

      <Button
        disabled={isSubmitting}
        type="submit"
        size="lg"
        className={css.submitButton}
      >
        {isSubmitting ? (
          <div className={css.loadingContainer}>
            <ReloadIcon className={css.loadingIcon} />
            Submitting...
          </div>
        ) : (
          t('contacts.form.callToAction')
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
