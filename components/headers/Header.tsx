import { DefaultHeader } from 'components/headers/DefaultHeader';
import { DetailHeader } from 'components/headers/DetailHeader';
import styles from 'components/headers/Header.module.css';
import SearchHeader from 'components/headers/SearchHeader';
import { IHeader } from 'utils/interfaces';

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
