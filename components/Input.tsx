import React, { ChangeEventHandler, InputHTMLAttributes, useMemo } from 'react';
import styles from './Input.module.css';

interface Properties extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: 'text' | 'password' | 'email' | 'number' | 'file';
  classnames?: string;
  error?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({
  type,
  label,
  placeholder,
  classnames = '',
  onChange,
  capture,
  required,
  error,
  disabled,
}: Properties) => {
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
        required={required}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
