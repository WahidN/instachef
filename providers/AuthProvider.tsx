import React, { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  User,
  signOut,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from 'firebase/auth';
import { removeTokens, saveTokens } from '../helpers/tokens';
import { auth } from '../firebase.config';
import { errorMessage, getErrorMessage } from '../helpers/errorCodes';
export interface AuthContextType {
  // login: (values: any) => Promise<void>; //@TODO fix type
  signInWithGoogle: () => Promise<void> | undefined;
  createUser: ({ email, password }: { email: string; password: string }) => Promise<User | null>;
  logout: () => void;
  authErrors: string | null;
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
  createUser: () => {
    //
  },
  user: null,
  loading: true,
  authErrors: null,
};

const AuthContext = createContext<AuthContextType>(initialState);

interface Properties {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Properties) => {
  const [user, setUser] = useState<User | null>(initialState.user);
  const [loading, setLoading] = useState<boolean>(initialState.loading);
  const [authErrors, setAuthErrors] = useState<string | null>(initialState.authErrors);

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
        setAuthErrors(getErrorMessage(error.code));
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
      setAuthErrors(getErrorMessage(error.code));
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setUser(null);
    removeTokens();
    await signOut(auth);
  }, []);

  const createUser = useCallback(
    async ({ email, password }: { email: string; password: string }): Promise<User | null> => {
      try {
        const newUser = await createUserWithEmailAndPassword(auth, email, password);
        if (newUser) {
          console.log(newUser)
          await sendEmailVerification(newUser.user);
        }
        return newUser.user;
      } catch (error) {
        console.log(error);
        setAuthErrors(getErrorMessage(error.code));
        return null;
      }
    },
    []
  );

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, createUser, logout, loading, authErrors }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
