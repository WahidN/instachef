import { NextRouter } from 'next/router';
import { ReactNode, useMemo } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { appRoutes } from '../utils/routes';
import { Loader } from './Loader';

const isBrowser = () => typeof window !== 'undefined';

interface Properties {
  router: NextRouter;
  children?: ReactNode;
}

const ProtectedRoute = ({ router, children }: Properties): JSX.Element => {
  //Identify authenticated user
  const { user, loading } = useAuth();
  const shouldShowLoader = useMemo(() => loading && !user, [loading, user]);

  const unprotectedRoutes = [appRoutes.LOGIN_PAGE, appRoutes.REGISTER_PAGE];
  const pathIsProtected = !unprotectedRoutes.includes(router.pathname);

  if (isBrowser() && !user && pathIsProtected) {
    router.push(appRoutes.LOGIN_PAGE);
  }

  return shouldShowLoader ? <Loader /> : <>{children}</>;
};

export default ProtectedRoute;
