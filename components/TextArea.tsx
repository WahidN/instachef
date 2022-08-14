import { ChangeEventHandler, forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import styles from './TextArea.module.css';

interface Properties extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  classnames?: string;
  error?: string | FieldError;
  rows?: number;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Properties>(
  ({ label, classnames, error, onChange, rows = 6, ...rest }, reference) => (
    <div className={`${styles.textareaWrap} ${classnames ?? ''}`}>
      <textarea className={styles.textArea} {...rest} ref={reference} placeholder=" " rows={rows} onChange={onChange} />
      <label className={styles.label} htmlFor="">
        {label}
      </label>
      {error && <span className={styles.error}>{error.toString()}</span>}
    </div>
  )
);

TextArea.displayName = 'TextArea';
