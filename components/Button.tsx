import { MouseEventHandler, ReactNode, useMemo } from 'react';
import styles from './Button.module.css';
import { Icon, IconType } from './Icon';
import { Loader } from './Loader';

interface Properties {
  children?: ReactNode;
  type?: 'button' | 'submit';
  icon?: IconType;
  onClick?: MouseEventHandler;
  secondary?: boolean;
  outline?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  isSmall?: boolean;
  isSimple?: boolean;
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
  isSmall,
  isSimple,
}: Properties) => {
  const classStyles = useMemo(
    () =>
      isDisabled || isLoading
        ? `${styles.button} ${styles.disabled}`
        : outline
        ? `${styles.outline} ${styles.button}`
        : secondary
        ? `${styles.secondary} ${styles.button}`
        : isSimple
        ? `${styles.isSimple} ${styles.button}`
        : `${styles.button} ${styles.primary}`,
    [isDisabled, isLoading, isSimple, outline, secondary]
  );

  const smallButtonClass = useMemo(() => (isSmall ? styles.smallButton : ''), [isSmall]);

  return (
    <button
      type={type}
      className={`${classStyles} ${smallButtonClass}`}
      onClick={onClick}
      disabled={isLoading || isDisabled}
    >
      {isLoading ? (
        <Loader buttonLoader />
      ) : (
        <>
          {!!icon && <Icon width={20} viewBoxHeight={25} viewBoxWidth={25} classes={styles.buttonIcon} type={icon} />}
          {children}
        </>
      )}
    </button>
  );
};
