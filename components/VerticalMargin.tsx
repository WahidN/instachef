import React, { ReactNode, useMemo } from 'react';
import styles from './VerticalMargin.module.css';

interface Properties {
  children: ReactNode;
  size: 'small' | 'big';
}

export const VerticalMargin = ({children, size}: Properties) => {
  const classNames = useMemo(() => size === 'small' ? styles.small : styles.big, [size]);

  return (
    <div className={classNames}>{children}</div>
  )
}
