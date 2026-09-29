import emailjs from '@emailjs/browser';

export interface SendMessageParams {
  name: string;
  email: string;
  message: string;
}

export interface ContactServiceResult {
  success: boolean;
  error?: string;
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

const isConfigured = (): boolean => {
  return !!(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
};

export const sendContactMessage = async (
  params: SendMessageParams
): Promise<ContactServiceResult> => {
  if (!isConfigured()) {
    return {
      success: false,
      error: 'Email service is not configured. Please email me directly at pallavimarallas@gmail.com',
    };
  }

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name: params.name,
      from_email: params.email,
      message: params.message,
    }, EMAILJS_PUBLIC_KEY);

    return { success: true };
  } catch (err) {
    return {
      success: false,
      error: 'Failed to send message. Please try emailing me directly at pallavimarallas@gmail.com',
    };
  }
};
