import styles from 'components/headers/Header.module.css';
import { Logo } from 'components/Logo';
import React, { ReactNode, useMemo } from 'react';

interface Properties {
  showLogo?: boolean;
  title?: string;
  buttonLeft?: ReactNode;
  buttonRight?: ReactNode;
}

export const DefaultHeader = React.memo(({ title, showLogo, buttonLeft, buttonRight }: Properties) => {
  const classes = useMemo(() => (!showLogo ? styles.headerWhite : undefined), [showLogo]);

  return (
    <div className={`${styles.headerInner} ${classes}`}>
      <div className={styles.buttonLeft}>{buttonLeft}</div>
      {showLogo ? <Logo smallLogo /> : <span className={styles.title}>{title}</span>}
      <div className={styles.buttonRight}>{buttonRight}</div>
    </div>
  );
});

DefaultHeader.displayName = 'DefaultHeader';
