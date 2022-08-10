import { MouseEventHandler, ReactNode, useMemo } from 'react';
import styles from './Button.module.css';
import { Icon, IconType } from './Icon';
import { Loader } from './Loader';

interface Properties {
  children: ReactNode;
  type?: 'button' | 'submit';
  icon?: IconType;
  onClick?: MouseEventHandler;
  secondary?: boolean;
  outline?: boolean;
  isLoading?: boolean;
}

export const Button = ({ children, onClick, outline, icon, secondary, type = 'button', isLoading }: Properties) => {
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
      {isLoading ? (
        <Loader buttonLoader />
      ) : (
        <>
          {!!icon && <Icon classes={styles.buttonIcon} type={icon} />}
          {children}
        </>
      )}
    </button>
  );
};
