import { ReactNode } from "react";

export interface IHeader {
  title?: string;
  type?: 'default' | 'detail' | 'search';
  buttonLeft?: ReactNode;
  buttonRight?: ReactNode;
  showLogo?: boolean;
}