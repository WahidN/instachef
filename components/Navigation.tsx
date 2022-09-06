import { Icon, IconType } from 'components/Icon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { appRoutes } from 'utils/routes';
import styles from './Navigation.module.css';

interface NavItem {
  link: string;
  icon: IconType;
}

const NAV_ITEMS: NavItem[] = [
  {
    link: appRoutes.HOME,
    icon: 'home',
  },
  {
    link: appRoutes.EXPLORE,
    icon: 'search',
  },
  {
    link: appRoutes.ADD_RECIPE,
    icon: 'plus',
  },
  {
    link: appRoutes.FAVORITES,
    icon: 'heart',
  },
  {
    link: appRoutes.PROFILE,
    icon: 'person',
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
                <Icon width={30} height={30} type={item.icon} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
