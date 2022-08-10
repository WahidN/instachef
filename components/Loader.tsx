import { useMemo } from 'react';
import styles from './Loader.module.css';

interface Properties {
  buttonLoader?: boolean;
}

export const Loader = ({ buttonLoader }: Properties) => {
  const classes = useMemo(
    () => (buttonLoader ? `${styles.loader} ${styles.loaderInButton}` : styles.loader),
    [buttonLoader]
  );

  return <div className={classes}></div>;
};
