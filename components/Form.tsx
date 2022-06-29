import React, { FormEventHandler, ReactNode } from 'react'
import { Button } from './Button';
import styles from "./Form.module.css";


interface Properties {
  children: ReactNode;
  buttonLabel: string;
  isLoading?: boolean;
  onSubmit?: FormEventHandler<HTMLFormElement>
}

export const Form = ({children, buttonLabel, onSubmit}: Properties) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
      <Button type='submit'>
        {buttonLabel}
      </Button>
    </form>
  );
}
