import { ReactNode } from 'react';

export interface IHeader {
  title?: string;
  type?: 'default' | 'detail' | 'search';
  buttonLeft?: ReactNode | JSX.Element;
  buttonRight?: ReactNode | JSX.Element;
  showLogo?: boolean;
}

export interface IUser {
  id: string;
  bio: string;
  followers: string[];
  following: string[];
  likedPosts: string[];
  favorites: string[];
  email: string | null;
}
