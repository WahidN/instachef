import { NextRouter } from 'next/router';
import { ReactNode, useMemo } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { LoginForm } from './forms/LoginForm';
import { Loader } from './Loader';
interface Properties {
  router: NextRouter;
  children?: ReactNode;
}

const ProtectedRoute = ({ children }: Properties): JSX.Element => {
  //Identify authenticated user
  const { user, loading } = useAuth();
  const shouldShowLoader = useMemo(() => loading, [loading]);
  const shouldShowLogin = useMemo(() => !shouldShowLoader && !user, [shouldShowLoader, user]);

  return shouldShowLoader ? <Loader /> : shouldShowLogin ? <LoginForm /> : <>{children}</>;
};

export default ProtectedRoute;
