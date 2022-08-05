import { ReactNode, useMemo } from 'react';
import styles from './Container.module.css';

interface Properties {
  children: ReactNode;
  centerContent?: boolean;
}

export const Container = ({ children, centerContent }: Properties) => {
  const classes = useMemo(
    () => (centerContent ? `${styles.center} ${styles.container}` : styles.container),
    [centerContent]
  );

  return <div className={classes}>{centerContent ? <div>{children}</div> : children}</div>;
};
