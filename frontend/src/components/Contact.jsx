// external imports
import { useState, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
// internal imports
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const textAreaRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitError, setIsSubmitError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  // A mapping of field names to their corresponding validation functions
  const rules = useMemo(
    () => ({
      name: (value) =>
        value.length >= 3 ? '' : 'At least 3 characters required',
      email: (value) => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(value) ? '' : 'Invalid email address';
      },
      message: (value) =>
        value.length >= 20 ? '' : 'At least 20 characters required',
    }),
    []
  );

  const textAreaInput = (e) => {
    const { scrollHeight } = e.target;
    const { paddingTop, paddingBottom } = window.getComputedStyle(textAreaRef.current);
    const paddingY = parseInt(paddingTop) + parseInt(paddingBottom);
    textAreaRef.current.style.height = `${scrollHeight - paddingY}px`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (value.trim() === '') {
      setErrors({ ...errors, [name]: '' });
    } else {
      const errorMessage = validateField(name, value);
      setErrors({ ...errors, [name]: errorMessage, form: '' });
    }

    setIsSubmitError(false);
  };

  const validateField = useCallback(
    (fieldName, value) => {
      return rules[fieldName](value);
    },
    [rules]
  );

  const sendEmail = async (form) => {
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

  const handleSubmit = async (
    e,
    form,
    setForm,
    setIsSubmitError,
    setLoading,
    setErrors
  ) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setErrors({ ...errors, form: 'Missing a required field' });
      return;
    }

    setIsSubmitError(false);

    const filteredErrors = Object.entries(errors)
      .filter(([keys, values]) => values !== '')
      .reduce((object, [key, value]) => {
        object[key] = value;
        return object;
      }, {});

    if (Object.keys(filteredErrors).length > 0) {
      setIsSubmitError(true);
      setErrors({ ...errors, ...filteredErrors });
      return;
    }

    setLoading(true);

    const error = await sendEmail(form);
    if (error) {
      setIsEmailSent(false);
      setIsSubmitError(true);
      setErrors((errors) => ({ ...errors, form: error }));
    } else {
      setForm({
        name: '',
        email: '',
        message: '',
      });
      setLoading(false);
      setIsEmailSent(true);
      setIsSubmitError(false);
      setTimeout(() => setIsEmailSent(false), 5000);
    }
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex justify-center gap-10'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 md:p-16 sm:p-10 xs:p-8 p-6 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={(e) =>
            handleSubmit(
              e,
              form,
              setForm,
              setIsSubmitError,
              setLoading,
              setErrors
            )
          }
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-mediummb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-2 px-4 placeholder:text-secondary placeholder:opacity-60 text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.name && (
              <span
                className={`${
                  isSubmitError ? `${styles.errorText}` : 'text-secondary'
                } text-[14px]`}
              >
                {errors.name}
              </span>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-mediummb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-2 px-4 placeholder:text-secondary placeholder:opacity-60 text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.email && (
              <span
                className={`${
                  isSubmitError ? `${styles.errorText}` : 'text-secondary'
                } text-[14px]`}
              >
                {errors.email}
              </span>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-mediummb-4'>Your Message</span>
            <textarea
              ref={textAreaRef}
              rows={1}
              name='message'
              value={form.message}
              onChange={handleChange}
              onInput={textAreaInput}
              placeholder='What do you want to say?'
              className='bg-tertiary py-2 px-4 placeholder:text-secondary placeholder:opacity-60 text-white rounded-lg outline-none border-none font-medium min-h-[100px] resize-none'
            />
            {errors.message && (
              <span
                className={`${
                  isSubmitError ? `${styles.errorText}` : 'text-secondary'
                } text-[14px]`}
              >
                {errors.message}
              </span>
            )}
          </label>
          {errors.form && (
            <span className={`${styles.errorText} text-[16px]`}>
              {errors.form}
            </span>
          )}
          <div className='flex items-center'>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-semibold shadow-md shadow-primary rounded-xl'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
            {isEmailSent && (
              <p className={`${styles.successText} text-center text-[16px] inset-x-0 mx-auto px-3`}>
                Thanks for reaching out, I'll get back to you shortly. 👋🌳
              </p>
            )}
          </div>
        </form>
      </motion.div>
      
      {/* <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div> */}

    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
