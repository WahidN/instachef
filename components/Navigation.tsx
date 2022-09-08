import { Icon, IconType } from 'components/Icon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { appRoutes } from 'utils/routes';
import styles from './Navigation.module.css';

interface NavItem {
  link: string;
  icon: {
    type: IconType;
    viewBoxWidth?: number;
    viewBoxHeight?: number;
  };
}

const NAV_ITEMS: NavItem[] = [
  {
    link: appRoutes.HOME,
    icon: {
      type: 'home',
      viewBoxHeight: 25,
      viewBoxWidth: 25,
    },
  },
  {
    link: appRoutes.EXPLORE,
    icon: {
      type: 'search',
    },
  },
  {
    link: appRoutes.ADD_RECIPE,
    icon: {
      type: 'plus',
    },
  },
  {
    link: appRoutes.FAVORITES,
    icon: {
      type: 'heart',
    },
  },
  {
    link: appRoutes.PROFILE,
    icon: {
      type: 'person',
    },
  },
];

export const Navigation = () => {
  const router = useRouter();

  return (
    <nav className={styles.navigation}>
      <ul>
        {NAV_ITEMS.map((item) => (
          <li className={router.pathname == item.link ? styles.active : ''} key={item.link}>
            <Link href={item.link}>
              <a>
                <Icon
                  width={30}
                  height={30}
                  viewBoxWidth={item.icon.viewBoxWidth}
                  viewBoxHeight={item.icon.viewBoxHeight}
                  type={item.icon.type}
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
