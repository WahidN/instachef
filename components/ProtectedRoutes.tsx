import { NextRouter } from 'next/router';
import { ReactNode, useMemo } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { appRoutes } from '../utils/routes';
import { LoginForm } from './forms/LoginForm';
import { Loader } from './Loader';

const unprotectedRoutes = new Set([appRoutes.REGISTER_PAGE]);

interface Properties {
  router: NextRouter;
  children?: ReactNode;
}

const ProtectedRoute = ({ children, router }: Properties): JSX.Element => {
  //Identify authenticated user
  const { user, loading } = useAuth();
  const shouldShowLoader = useMemo(() => loading, [loading]);
  const shouldShowLogin = useMemo(
    () => !shouldShowLoader && !user && !unprotectedRoutes.has(router.pathname),
    [router.pathname, shouldShowLoader, user]
  );

  return shouldShowLoader ? <Loader /> : shouldShowLogin ? <LoginForm /> : <>{children}</>;
};

export default ProtectedRoute;
