import { useEffect, useState } from 'react';
import { sendContactMessage } from '../services/contact';

interface FormState {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

interface UseContactFormOptions {
  resetDelay?: number;
}

export const useContactForm = ({ resetDelay = 3000 }: UseContactFormOptions = {}) => {
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

    const result = await sendContactMessage(form);

    if (result.success) {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
      setErrorMsg(result.error || 'Failed to send message. Please try again.');
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
