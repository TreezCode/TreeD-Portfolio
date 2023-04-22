import emailjs from '@emailjs/browser';

export const sendEmail = async (form) => {
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICEID,
      import.meta.env.VITE_EMAILJS_TEMPLATEID,
      {
        from_name: form.name,
        to_name: 'Treez',
        from_email: form.email,
        to_email: 'treezcode@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLICKEY
    );
    return null;
  } catch (error) {
    return 'Oops, something went wrong.';
  }
};