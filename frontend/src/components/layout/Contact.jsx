// external imports
import { useState, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';
import { HiOutlineRefresh } from 'react-icons/hi';
// internal imports
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { styles } from '../../styles';
import { EarthCanvas } from '../canvas';
import { GlowButton } from '../global';

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
    setForm({ ...form, [name]: value });

    if (value.trim() === '') {
      setErrors({ ...errors, [name]: '' });
    } else {
      const errorMessage = validateField(name, value);
      setErrors({ ...errors, [name]: errorMessage, form: '' });
    }

    setIsSubmitError(false);
  };

  const handleReset = () => {
    setForm({
      name: '',
      email: '',
      message: '',
    });
    setErrors({});
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
      setTimeout(() => setIsEmailSent(false), 7000);
    }
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex justify-center gap-10'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-primaryFade md:p-16 sm:p-10 xs:p-8 p-6 rounded-2xl border-tertiary border'
        style={{ backdropFilter: 'blur(15px)' }}
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
          className='mt-8 flex flex-col gap-8'
        >
          <div className='top flex justify-between sm:flex-row flex-col gap-4'>
            <label className='flex flex-col sm:w-[calc((100%-30px)/2)]'>
              <span className='text-white font-mediummb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className={styles.inputField}
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
            <label className='flex flex-col sm:w-[calc((100%-30px)/2)]'>
              <span className='text-white font-mediummb-4'>Your Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className={styles.inputField}
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
          </div>
          <div className='bottom flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-mediummb-4'>Your Message</span>
              <textarea
                ref={textAreaRef}
                rows={1}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What do you want to say?'
                className={`${styles.inputField} min-h-[100px]`}
              />
              {errors.message && (
                <span className={`${isSubmitError ? `${styles.errorText}` : 'text-secondary'} text-[14px]`}>
                  {errors.message}
                </span>
              )}
            </label>
            <div>
              {errors.form && (
                <p className={`${styles.errorText} text-center text-[16px] inset-x-0 mx-auto px-3`}>
                  {errors.form}
                </p>
              )}
              {isEmailSent && (
                <p className={`${styles.successText} text-center text-[16px] inset-x-0 mx-auto px-3`}>
                  Thanks for reaching out, I'll get back to you shortly. 👋🌳
                </p>
              )}
            </div>
            <div className='flex sm:flex-row flex-col justify-center items-center gap-4'>
              <div className='flex justify-center sm:w-[calc((100%-30px)/2)] w-full m-4'>
                <GlowButton
                  type='submit'
                  text={loading ? 'Sending...' : <span className='flex items-center justify-center gap-2'>Send<FaPaperPlane /></span>}
                  href='contact'
                  color={styles.accent}
                  bgColor={styles.tertiary}
                />
              </div>
              <div className='flex justify-center sm:w-[calc((100%-30px)/2)] w-full m-4'>
                <GlowButton
                  type='button'
                  text={<span className='flex items-center justify-center gap-2'>Reset<HiOutlineRefresh /></span>}
                  href='contact'
                  color={styles.accent}
                  bgColor={styles.tertiary}
                  onClick={handleReset}
                />
              </div>
            </div>
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

export default SectionWrapper(Contact, 'contact', 0.25);
