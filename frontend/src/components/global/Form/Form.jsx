// external imports
import { useState, useEffect, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { HiOutlineRefresh } from 'react-icons/hi';
// internal imports
import {useValidateField, useValidationRules } from '../../../utils/formValidation';
import { sendEmail } from '../../../utils/email';
import { styles } from '../../../styles';
import GlowButton from '../GlowButton/GlowButton';
import './Form.css';

const InputField = ({
  inputRef,
  type,
  name,
  value,
  onChange,
  required,
  className,
  htmlFor,
  label,
  errors,
  isSubmitError,
}) => (
  <div className='input-box sm:w-[calc((100%-30px)/2)]'>
    <input
      ref={inputRef}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={className}
    />
    <label htmlFor={htmlFor}>{label}</label>
    <LabelMessage errors={errors} isSubmitError={isSubmitError} />
  </div>
);

const LabelMessage = ({ errors, isSubmitError }) => (
  <span
    className={`${
      isSubmitError ? `${styles.errorText}` : 'text-secondary'
    } text-[14px]`}
  >
    {errors}
  </span>
);
const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [userMessage, setUserMessage] = useState({});
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isSubmitError, setIsSubmitError] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const rules = useValidationRules();
  const validateField = useValidateField(rules);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    value.trim() === ''
      ? setErrors({ ...errors, [name]: '' })
      : setErrors({ ...errors, [name]: validateField(name, value), form: '' });

    setIsSubmitError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email || !form.message) {
      setErrors({ ...errors, form: 'Missing a required field' });
      setLoading(false);
      return;
    }

    const errorsExist = Object.values(errors).some((value) => value !== '');
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

  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      message: '',
    });
    setErrors({});
  };

  const { name, email, message } = errors;
  useEffect(() => {
    const nameInput = nameRef.current;
    if (name) {
      nameInput.classList.add('invalid');
      nameInput.classList.remove('valid');
    } else if (!form.name) {
      nameInput.classList.remove('invalid');
      nameInput.classList.remove('valid');
    } else {
      nameInput.classList.remove('invalid');
      nameInput.classList.add('valid');
    }
  }, [name, form]);

  useEffect(() => {
    const emailInput = emailRef.current;
    if (email) {
      emailInput.classList.add('invalid');
      emailInput.classList.remove('valid');
    } else if (!form.email) {
      emailInput.classList.remove('invalid');
      emailInput.classList.remove('valid');
    } else {
      emailInput.classList.remove('invalid');
      emailInput.classList.add('valid');
    }
  }, [email, form]);

  useEffect(() => {
    const messageInput = messageRef.current;
    if (message) {
      messageInput.classList.add('invalid');
      messageInput.classList.remove('valid');
    } else if (!form.message) {
      messageInput.classList.remove('invalid');
      messageInput.classList.remove('valid');
    } else {
      messageInput.classList.remove('invalid');
      messageInput.classList.add('valid');
    }
  }, [message, form]);

  useEffect(() => {
    isEmailSent
      ? setUserMessage({ message:"Thanks for reaching out, I'll get back to you shortly. 👋🌳", class: styles.successText })
      : errors.form
        ? setUserMessage({ message: errors.form, class: styles.errorText })
        : setUserMessage({ message: 'placeholder', class: 'opacity-0 select-none'});
  }, [isEmailSent, errors]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className='flex flex-col gap-8 mt-8'
    >
      <div className='form-top flex justify-between sm:flex-row flex-col gap-4'>
        <InputField
          inputRef={nameRef}
          type='text'
          name='name'
          value={form.name}
          onChange={handleChange}
          required={false}
          className={styles.inputField}
          htmlFor='name'
          label='Your Name'
          errors={errors.name}
          isSubmitError={isSubmitError}
        />
        <InputField
          inputRef={emailRef}
          type='email'
          name='email'
          value={form.email}
          onChange={handleChange}
          required={false}
          className={styles.inputField}
          htmlFor='email'
          label='Your Email'
          errors={errors.email}
          isSubmitError={isSubmitError}
        />
      </div>
      <div className='form-bottom flex flex-col gap-8'>
        <div className='input-box'>
          <textarea
            ref={messageRef}
            type='text'
            name='message'
            value={form.message}
            onChange={handleChange}
            required={false}
            className={`${styles.inputField} min-h-[100px]`}
          />
          <label htmlFor='message'>Your Message</label>
          <LabelMessage errors={errors.message} isSubmitError={isSubmitError} />
        </div>
        <p className={`${userMessage.class} text-center text-[16px] inset-x-0 mx-auto px-3`}>
          {userMessage.message}
        </p>
        <div className='flex sm:flex-row flex-col justify-center items-center gap-4'>
          <div className='flex justify-center sm:w-[calc((100%-30px)/2)] w-full mb-2'>
            <GlowButton
              type='submit'
              text={loading ? ('Sending...') : (<>Send<FaPaperPlane /></>)}
              color={styles.accent}
              bgColor={styles.tertiary}
            />
          </div>
          <div className='flex justify-center sm:w-[calc((100%-30px)/2)] w-full mb-2'>
            <GlowButton
              type='button'
              text={<>Reset<HiOutlineRefresh /></>}
              color={styles.accent}
              bgColor={styles.tertiary}
              onClick={resetForm}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;