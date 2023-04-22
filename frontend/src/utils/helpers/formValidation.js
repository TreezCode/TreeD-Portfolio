import { useMemo, useCallback } from 'react';

export const useValidationRules = () => {
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
  return rules;
};

export const useValidateField = (rules) => {
  const validateField = useCallback(
    (fieldName, value) => {
      return rules[fieldName](value);
    },
    [rules]
  );
  return validateField;
};
