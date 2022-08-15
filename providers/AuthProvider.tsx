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
  User
} from 'firebase/auth';
import { doc, DocumentData, DocumentReference, getDoc, setDoc } from 'firebase/firestore';
import { getErrorMessage } from 'helpers/errorCodes';
import { userCol } from 'helpers/firestore';
import { removeTokens, saveTokens } from 'helpers/tokens';
import { UserModel } from 'models/User';
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase.config';

export interface AuthContextType {
  login: (email: string, password: string) => Promise<void>; //@TODO fix type
  signInWithGoogle: () => Promise<void> | undefined;
  createUser: ({ email, password }: { email: string; password: string }) => Promise<User | null> | undefined;
  logout: () => void;
  fillUser: (authUser: User) => void;
  authErrors: string | null;
  user?: UserModel | null;
  loading: boolean;
  userReference: DocumentReference<DocumentData> | null;
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
  createUser: async () => null,
  fillUser: async () => null,
  updateProfile: async (user: User) => {
    // init
  },
  user: null,
  loading: false,
  authErrors: null,
  userReference: null,
};

const AuthContext = createContext<AuthContextType>(initialState);

interface Properties {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Properties) => {
  const [user, setUser] = useState<UserModel | null>(initialState.user);
  const [loading, setLoading] = useState<boolean>(initialState.loading);
  const [authErrors, setAuthErrors] = useState<string | null>(initialState.authErrors);
  const [userReference, setUserReference] = useState<DocumentReference | null>(initialState.userReference);

  const setUserInDB = useCallback(async (authUser: User) => {
    const uReference = doc(userCol, `${authUser.uid}`);
    setUserReference(uReference);
    await setDoc(uReference as DocumentReference, {
      id: authUser.uid,
      bio: '',
      followers: [],
      following: [],
      favorites: [],
      likedPosts: [],
      email: authUser.email,
    });
  }, []);

  const fillUser = useCallback(async (authUser: User) => {
    const newUser = new UserModel(authUser.uid, authUser);
    const documentReference = doc(userCol, `${authUser.uid}`);
    const documentSnap = await getDoc(documentReference);
    const userData = documentSnap.data();
    newUser.fillProfile(
      userData?.bio || '',
      userData?.followers,
      userData?.following,
      userData?.likedPosts,
      userData?.favorites
    );
    setUser(newUser);
  }, []);

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        await fillUser(authUser);
        setLoading(false);
        setAuthErrors(null);
        return;
      }
    });

    const initAuth = async () => {
      try {
        setAuthErrors(null);
        const result = await getRedirectResult(auth);
        if (result) {
          // This is the signed-in user
          const authUser = result.user;
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          saveTokens(token, null);
          setUserInDB(authUser);
        }
      } catch (error) {
        if (error instanceof FirebaseError) {
          handleErrors(error);
        }
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, [fillUser, setUserInDB]);

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await fillUser(userCredential.user);
      })
      .catch((error) => {
        if (error instanceof FirebaseError) {
          handleErrors(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const signInWithGoogle = useCallback(async () => {
    try {
      setLoading(true);
      setAuthErrors(null);
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      if (error instanceof FirebaseError) {
        handleErrors(error);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await signOut(auth);
      setUser(null);
      removeTokens();
    } catch (error) {
      if (error instanceof FirebaseError) {
        handleErrors(error);
      }
    }
  }, []);

  const createUser = useCallback(
    async ({ email, password }: { email: string; password: string }): Promise<User | null> => {
      try {
        setAuthErrors(null);
        setLoading(true);
        const newUser = await createUserWithEmailAndPassword(auth, email, password);
        if (newUser) {
          setUserInDB(newUser.user);
          await sendEmailVerification(newUser.user);
          return newUser.user;
        }
        return null;
      } catch (error) {
        if (error instanceof FirebaseError) {
          handleErrors(error);
        }
        return null;
      } finally {
        setLoading(false);
      }
    },
    [setUserInDB]
  );

  const handleErrors = (error: FirebaseError) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(error);
    }

    setAuthErrors(getErrorMessage(error.code));
  };

  return (
    <AuthContext.Provider
      value={{ user, signInWithGoogle, createUser, logout, login, loading, authErrors, userReference, fillUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
