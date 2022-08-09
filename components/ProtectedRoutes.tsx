import { LoginForm } from 'components/forms/LoginForm';
import { Loader } from 'components/Loader';
import { NextRouter } from 'next/router';
import { useAuth } from 'providers/AuthProvider';
import { ReactNode, useMemo } from 'react';
import { appRoutes } from 'utils/routes';

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
