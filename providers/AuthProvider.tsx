import React, { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  User,
  signOut,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { removeTokens, saveTokens } from '../helpers/tokens';
import { auth } from '../firebase.config';
export interface AuthContextType {
  // login: (values: any) => Promise<void>; //@TODO fix type
  signInWithGoogle: () => Promise<void> | undefined;
  createUser: (email: string, password: string) => Promise<void>;
  logout: () => void;
  user?: User | null; //@TODO fix type
  loading: boolean;
}

const initialState = {
  // // eslint-disable-next-line unicorn/no-useless-undefined
  // login: async () => undefined,
  logout: async () => {
    // init
  },
  signInWithGoogle: async () => {
    // init
  },
  createUser: async () => {
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

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
        setLoading(false);
        return;
      }
    });

    const initAuth = async () => {
      try {
        setLoading(true);
        const result = await getRedirectResult(auth);
        if (result) {
          // This is the signed-in user
          const authUser = result.user;
          setUser(authUser);
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          saveTokens(token, null);
        }
      } catch (error) {
        alert(error);
        setLoading(false);
      }
      setLoading(false);
    };

    initAuth();
  }, []);

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

  const createUser = useCallback(async (email: string, password: string) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, createUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
