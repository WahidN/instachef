import React, { MouseEventHandler, useMemo } from 'react';
import styles from './Button.module.css';

interface Properties {
  label: string;
  onClick?: MouseEventHandler;
  secondary?: boolean;
  outline?: boolean;
}

export const Button = ({label, onClick, outline, secondary}: Properties) => {
  const classStyles = useMemo(() => outline ? `${styles.outline} ${styles.button}` : secondary ? `${styles.secondary} ${styles.button}` : `${styles.button} ${styles.primary}`, [])
  return (
    <button className={classStyles} onClick={onClick}>
      {label}
    </button>
  );
}
