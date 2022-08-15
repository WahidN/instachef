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
  isDisabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  outline,
  icon,
  secondary,
  type = 'button',
  isLoading,
  isDisabled,
}: Properties) => {
  const classStyles = useMemo(
    () =>
      isDisabled || isLoading
        ? `${styles.button} ${styles.disabled}`
        : outline
        ? `${styles.outline} ${styles.button}`
        : secondary
        ? `${styles.secondary} ${styles.button}`
        : `${styles.button} ${styles.primary}`,
    [isDisabled, isLoading, outline, secondary]
  );

  return (
    <button type={type} className={classStyles} onClick={onClick} disabled={isLoading || isDisabled}>
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
