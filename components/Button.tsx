import React, { MouseEventHandler, ReactNode, useMemo } from 'react';
import styles from './Button.module.css';
import { Icon, IconType } from './Icon';

interface Properties {
  children: ReactNode;
  type?: 'button' | 'submit';
  icon?: IconType;
  onClick?: MouseEventHandler;
  secondary?: boolean;
  outline?: boolean;
}

export const Button = ({ children, onClick, outline, icon, secondary, type = 'button' }: Properties) => {
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
      {icon && <Icon classes={styles.buttonIcon} type={icon} />}
      {children}
    </button>
  );
};
