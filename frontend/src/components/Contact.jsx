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
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitError, setIsSubmitError] = useState(false);
  const [loading, setLoading] = useState(false);

  // A mapping of field names to their corresponding validation functions.
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Set the updated form field value
    setForm({ ...form, [name]: value });

    // Reset error message for the field if the value is empty, else populate error and clear form
    if (value.trim() === '') {
      setErrors({ ...errors, [name]: '' });
    } else {
      const errorMessage = validateField(name, value);
      setErrors({ ...errors, [name]: errorMessage, form: '' });
    }

    // Reset submit error state
    setIsSubmitError(false);
  };

  const validateField = useCallback(
    (fieldName, value) => {
      return rules[fieldName](value);
    },
    [rules]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setErrors({ ...errors, form: 'Missing a required field' });
      return;
    }

    const filteredErrors = Object.entries(errors)
      .filter(([key, value]) => value !== '')
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

    setForm({
      name: '',
      email: '',
      message: '',
    });

    console.log('Message sent successfully');

    setTimeout(() => setLoading(false), 1000);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICEID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLICKEY;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATEID;

    emailjs
      .send(
        serviceID, // service
        templateID, // template
        {
          from_name: form.name,
          to_name: 'Treez',
          from_email: form.email,
          to_email: 'treezcode@gmail.com',
          message: form.message,
        },
        publicKey // public
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you, I will get back to you as soon as possible.');
        },
        (err) => {
          setLoading(false);
          console.log(err);
          alert('Oops, something went wrong.');
        }
      );
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
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
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
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
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
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
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
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
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-semibold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        {/* <EarthCanvas /> */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
