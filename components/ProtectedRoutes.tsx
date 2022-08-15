import { LoginForm } from 'components/forms/LoginForm';
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
  const { user } = useAuth();
  const shouldShowLogin = useMemo(() => !user && !unprotectedRoutes.has(router.pathname), [router.pathname, user]);

  return shouldShowLogin ? <LoginForm /> : <>{children}</>;
};

export default ProtectedRoute;
