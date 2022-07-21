import React, { ReactNode, useMemo } from 'react';
import Logo from '../Logo';
import styles from './Header.module.css';

interface Properties {
  showLogo?: boolean;
  title?: string;
  buttonLeft?: ReactNode;
  buttonRight?: ReactNode;
}

export const DefaultHeader = ({ title, showLogo, buttonLeft, buttonRight }: Properties) => {
  const classes = useMemo(() => (!showLogo ? styles.headerWhite : undefined), [showLogo]);

  return (
    <div className={`${styles.headerInner} ${classes}`}>
      {showLogo ? <Logo smallLogo /> : <span className={styles.title}>{title}</span>}
    </div>
  );
};
