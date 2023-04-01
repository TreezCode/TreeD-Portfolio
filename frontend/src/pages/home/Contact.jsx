// external imports
import { useState, useCallback, useMemo, useEffect } from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
// internal imports
import { styles } from '../../styles';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { sendEmail } from '../../utils/email';
import { GlowButton } from '../../components/global';
import { EarthCanvas } from '../../components/canvas';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isSubmitError, setIsSubmitError] = useState(false);
  const [userMessage, setUserMessage] = useState({});

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

  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      message: '',
    });
    setErrors({});
  };

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

  const validateField = useCallback(
    (fieldName, value) => {
      return rules[fieldName](value);
    },
    [rules]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email || !form.message) {
      setErrors({ ...errors, form: 'Missing a required field' });
      setLoading(false);
      return;
    }

    const errorsExist = Object.values(errors).some((value) => value !== '')
    if (errorsExist) {
      setIsSubmitError(true);
      setErrors({ ...errors });
      setLoading(false);
      return;
    }

    const response = await sendEmail(form);
    if (response) {
      setIsEmailSent(false);
      setIsSubmitError(true);
      setErrors((errors) => ({ ...errors, form: response }));
    } else {
      resetForm();
      setLoading(false);
      setIsEmailSent(true);
      setIsSubmitError(false);
      setTimeout(() => setIsEmailSent(false), 5000);
    }
  };

  useEffect(() => {
    isEmailSent
      ? setUserMessage({ message: "Thanks for reaching out, I'll get back to you shortly. 👋🌳", class: styles.successText})
      : errors.form
        ? setUserMessage({ message: errors.form, class: styles.errorText })
        : setUserMessage({ message: 'placeholder', class: 'opacity-0 select-none'});
  }, [isEmailSent, errors]);

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex justify-center gap-10'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-primaryFade md:p-16 sm:p-10 xs:p-8 p-6 rounded-2xl border-accentFade border'
        style={{ backdropFilter: 'blur(15px)' }}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form onSubmit={(e) =>handleSubmit(e)} className='mt-8 flex flex-col gap-8'>
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
                <LabelMessage errors={errors.name} isSubmitError={isSubmitError} />
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
                <LabelMessage errors={errors.email} isSubmitError={isSubmitError} />
              )}
            </label>
          </div>
          <div className='bottom flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-mediummb-4'>Your Message</span>
              <textarea
                rows={1}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What do you want to say?'
                className={`${styles.inputField} min-h-[100px]`}
              />
              {errors.message && (
                <LabelMessage errors={errors.message} isSubmitError={isSubmitError} />
              )}
            </label>
            <p className={`${userMessage.class} text-center text-[16px] inset-x-0 mx-auto px-3`}>
              {userMessage.message}
            </p>
            <div className='flex sm:flex-row flex-col justify-center items-center gap-4'>
              <div className='flex justify-center sm:w-[calc((100%-30px)/2)] w-full mb-2'>
                <GlowButton
                  type='submit'
                  text={
                    loading ? (
                      'Sending...'
                    ) : (
                      <span className='flex items-center justify-center gap-2'>
                        Send
                        <FaPaperPlane />
                      </span>
                    )
                  }
                  color={styles.accent}
                  bgColor={styles.tertiary}
                />
              </div>
              <div className='flex justify-center sm:w-[calc((100%-30px)/2)] w-full mb-2'>
                <GlowButton
                  type='button'
                  text={
                    <span className='flex items-center justify-center gap-2'>
                      Reset
                      <HiOutlineRefresh />
                    </span>
                  }
                  href=''
                  color={styles.accent}
                  bgColor={styles.tertiary}
                  onClick={resetForm}
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

const LabelMessage = ({errors, isSubmitError}) => (
  <span className={`${isSubmitError ? `${styles.errorText}` : 'text-secondary'} text-[14px]`}>
    {errors}
  </span>
);

export default SectionWrapper(Contact, 'contact', 0.25);