import { FirebaseError } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { UserModel } from '../components/models/User';
import { auth } from '../firebase.config';
import { getErrorMessage } from '../helpers/errorCodes';
import { userCol } from '../helpers/firestore';
import { removeTokens, saveTokens } from '../helpers/tokens';
export interface AuthContextType {
  login: (email: string, password: string) => Promise<void>; //@TODO fix type
  signInWithGoogle: () => Promise<void> | undefined;
  createUser: ({ email, password }: { email: string; password: string }) => Promise<UserModel | null> | undefined;
  logout: () => void;
  authErrors: string | null;
  user?: UserModel | null;
  loading: boolean;
}

const initialState = {
  login: async () => {
    // init
  },
  logout: async () => {
    // init
  },
  signInWithGoogle: async () => {
    // init
  },
  createUser: async ({ email, password }: { email: string; password: string }) => null,
  user: null,
  loading: true,
  authErrors: null,
};

const AuthContext = createContext<AuthContextType>(initialState);

interface Properties {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Properties) => {
  const [user, setUser] = useState<UserModel | null>(initialState.user);
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
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          saveTokens(token, null);
          setUserInDB(authUser.uid);
        }
      } catch (error) {
        if (error instanceof FirebaseError) {
          setAuthErrors(getErrorMessage(error.code));
        }
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        if (error instanceof FirebaseError) {
          setAuthErrors(getErrorMessage(error.code));
        }
      });
  };

  const signInWithGoogle = useCallback(async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      if (error instanceof FirebaseError) {
        setAuthErrors(getErrorMessage(error.code));
      }
    }
  }, []);

  const logout = useCallback(async () => {
    setUser(null);
    removeTokens();
    await signOut(auth);
  }, []);

  const createUser = useCallback(
    async ({ email, password }: { email: string; password: string }): Promise<UserModel | null> => {
      try {
        const newUser = await createUserWithEmailAndPassword(auth, email, password);
        if (newUser) {
          await sendEmailVerification(newUser.user);
          setUserInDB(newUser.user.uid);
          const userModel = {
            id: newUser.user.uid,
            bio: '',
            followers: [],
            following: [],
            likedPosts: [],
            favorites: [],
            email: newUser.user.email,
            displayName: newUser.user.displayName,
            emailVerified: newUser.user.emailVerified,
            photoUrl: newUser.user.photoURL,
          };
          setUser(userModel);
          return userModel;
        }
        return null;
      } catch (error) {
        if (error instanceof FirebaseError) {
          setAuthErrors(getErrorMessage(error.code));
        }
        return null;
      }
    },
    []
  );

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, createUser, logout, login, loading, authErrors }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

const setUserInDB = async (userId: string) => {
  const userReference = doc(userCol, `${userId}`);
  await setDoc(userReference, {
    id: userId,
    bio: '',
    followers: [],
    following: [],
    favorites: [],
    likedPosts: [],
  });
};
