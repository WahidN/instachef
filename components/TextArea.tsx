import { ChangeEventHandler, forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import styles from './TextArea.module.css';

interface Properties extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  classnames?: string;
  error?: string | FieldError;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Properties>(
  ({ label, classnames, error, onChange, ...rest }, reference) => (
    <div className={`${styles.textareaWrap} ${classnames}`}>
      <textarea className={styles.textArea} {...rest} ref={reference} placeholder=" " />
      <label className={styles.label} htmlFor="">
        {label}
      </label>
      {error && <span className={styles.error}>{error.toString()}</span>}
    </div>
  )
);

TextArea.displayName = 'TextArea';
