import { NextRouter } from "next/router";
import { ReactNode } from "react";
import { useAuth } from "../providers/AuthProvider";
import { appRoutes } from "../utils/routes";
import { Loader } from "./Loader";

const isBrowser = () => typeof window !== 'undefined';

interface Properties {
  router: NextRouter;
  children: ReactNode;
}

const ProtectedRoute = ({ router, children }: Properties) => {
  //Identify authenticated user
  const { user, loading } = useAuth();

  let unprotectedRoutes = [
    appRoutes.LOGIN_PAGE,
    appRoutes.REGISTER_PAGE
  ];

  if (loading) {
    return (
      <Loader />
    )
  }
  
  let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (isBrowser() && !user && pathIsProtected) {
    router.push(appRoutes.LOGIN_PAGE);
  }

  return (
    <>
      {children}
    </>
  );
};

export default ProtectedRoute;
