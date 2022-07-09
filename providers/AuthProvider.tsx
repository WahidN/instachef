import React, { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, User, signOut, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { removeTokens } from '../helpers/tokens';
import { auth } from '../firebase.config';
import { useRouter } from 'next/router';
export interface AuthContextType {
  // isLoadingUser: boolean;
  // login: (values: any) => Promise<void>; //@TODO fix type
  signInWithGoogle: () => Promise<void> | undefined;
  logout: () => void;
  user?: User | null; //@TODO fix type
  loading: boolean;
}

const initialState = {
  // isLoadingUser: true,
  // // eslint-disable-next-line unicorn/no-useless-undefined
  // login: async () => undefined,
  logout: async () => {
    // init
  },
  signInWithGoogle: async () => {
    // init
  },
  user: null,
  loading: true,
};

const AuthContext = createContext<AuthContextType>(initialState);

interface Properties {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Properties) => {
  const [user, setUser] = useState<User | null>(initialState.user);
  const [loading, setLoading] = useState<boolean>(initialState.loading);
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      setLoading(true);
      const result = await getRedirectResult(auth);
      if (result) {
        // This is the signed-in user
        const authUser = result.user;
        setUser(authUser);
        router.push('/');
      }
      setLoading(false);
    };

    initAuth();
  }, [router]);

  const signInWithGoogle = useCallback(async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setUser(null);
    removeTokens();
    await signOut(auth);
  }, []);

  return <AuthContext.Provider value={{ user, signInWithGoogle, logout, loading }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
