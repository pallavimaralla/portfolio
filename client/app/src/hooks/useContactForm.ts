import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormState {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

interface UseContactFormOptions {
  serviceId: string;
  templateId: string;
  publicKey: string;
  resetDelay?: number;
}

export const useContactForm = ({
  serviceId,
  templateId,
  publicKey,
  resetDelay = 3000,
}: UseContactFormOptions) => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (status === 'sent') {
      const timer = setTimeout(() => setStatus('idle'), resetDelay);
      return () => clearTimeout(timer);
    }
  }, [status, resetDelay]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }, publicKey);

      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email me directly.');
    }
  };

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  return {
    form,
    status,
    errorMsg,
    isValid: Boolean(isValid),
    handleChange,
    handleSubmit,
  };
};
