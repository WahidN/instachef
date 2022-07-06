import React, { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, User, onAuthStateChanged, signOut } from 'firebase/auth';
import { removeTokens, saveTokens } from '../helpers/tokens';
import { auth } from '../firebase.config';
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
  loading: false,
};

const AuthContext = createContext<AuthContextType>(initialState);

interface Properties {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Properties) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (user) {
        const token = await authUser?.getIdToken();
        setUser(authUser);
        saveTokens(token, null);
      } else {
        setUser(null);
      }
    });
    setLoading(false);
    return () => unsubscribe();
  });

  const signInWithGoogle = useCallback(async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setLoading(false);
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
