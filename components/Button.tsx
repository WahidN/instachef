import React, { MouseEventHandler, ReactNode, useMemo } from 'react';
import styles from './Button.module.css';

interface Properties {
  children: ReactNode;
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler;
  secondary?: boolean;
  outline?: boolean;
}

export const Button = ({ children, onClick, outline, secondary, type = 'button' }: Properties) => {
  const classStyles = useMemo(
    () =>
      outline
        ? `${styles.outline} ${styles.button}`
        : secondary
        ? `${styles.secondary} ${styles.button}`
        : `${styles.button} ${styles.primary}`,
    [secondary, outline]
  );
  return (
    <button type={type} className={classStyles} onClick={onClick}>
      {children}
    </button>
  );
};
