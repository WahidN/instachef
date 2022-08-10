import { FormEventHandler, ReactNode } from 'react';
import { Button } from './Button';
import styles from './Form.module.css';
import { VerticalMargin } from './VerticalMargin';

interface Properties {
  children: ReactNode;
  buttonLabel: string;
  isLoading?: boolean;
  fieldErrors?: string | null;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const Form = ({ children, buttonLabel, fieldErrors, onSubmit, isLoading }: Properties) => (
  <form className={styles.form} onSubmit={onSubmit}>
    {children}
    <Button type="submit" isLoading={isLoading}>
      {buttonLabel}
    </Button>
    {fieldErrors && (
      <VerticalMargin size="small">
        <span className="textSmall textError">{fieldErrors}</span>
      </VerticalMargin>
    )}
  </form>
);
