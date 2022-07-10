import React, { ChangeEventHandler, forwardRef, InputHTMLAttributes, useMemo } from 'react';
import { FieldError } from 'react-hook-form';
import styles from './Input.module.css';

interface Properties extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: 'text' | 'password' | 'email' | 'number' | 'file';
  classnames?: string;
  error?: string | FieldError;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Input = forwardRef<HTMLInputElement, Properties>(
  ({ type, label, placeholder, classnames = '', onChange, capture, required, error, disabled, ...rest }, reference) => {
    const inputClasses = useMemo(
      () => (error ? `${styles.inputError} ${styles.input} ${classnames}` : `${styles.input} ${classnames}`),
      [error, classnames]
    );

    return (
      <div className={styles.field}>
        <label className={styles.label}>{label}</label>
        {required && <span className={styles.required}>required</span>}
        <input
          className={inputClasses}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          capture={capture}
          disabled={disabled}
          ref={reference}
          {...rest}
        />
        {error && <span className={styles.error}>{error.toString()}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
