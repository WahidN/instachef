import Head from 'next/head';
import React, { ReactNode } from 'react';
import { Header } from './headers/Header';
import { IHeader } from './utils/interfaces';

const defaults = {
  title: 'InstaChef | Online social platform for chefs',
  description: 'Coming soon...',
};

interface Properties {
  children: ReactNode;
  title?: string;
  description?: string;
  headerOptions?: IHeader;
}

export const Layout = ({ children, title, description, headerOptions }: Properties) => (
  <>
    <Head>
      <title>{title || defaults.title}</title>
      <meta name="title" content={title || defaults.title} />
      <meta name="description" content={description || defaults.description} />
    </Head>
    <Header {...headerOptions} />
    <main>{children}</main>
  </>
);
