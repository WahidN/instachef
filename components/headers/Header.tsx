import React from 'react';
import { IHeader } from '../utils/interfaces';
import { DefaultHeader } from './DefaultHeader';
import { DetailHeader } from './DetailHeader';
import styles from './Header.module.css';
import SearchHeader from './SearchHeader';

export const Header = ({ type = 'default', title, showLogo, buttonLeft, buttonRight }: IHeader) => {
  const renderHeader = () => {
    switch (type) {
      case 'detail':
        return <DetailHeader />;
      case 'search':
        return <SearchHeader />;
      default:
        return <DefaultHeader title={title} showLogo={showLogo} buttonLeft={buttonLeft} buttonRight={buttonRight} />;
    }
  };

  return <header className={styles.header}>{renderHeader()}</header>;
};
