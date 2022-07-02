import Head from 'next/head';
import React, { ReactNode } from 'react';
import styles from './_Layout.module.css';

const defaults = {
  title: 'InstaChef | Online social platform for chefs',
  description: 'Coming soon...'
}

interface Properties {
  children: ReactNode;
  title: string;
  description: string;
}

export const _Layout = ({children, title, description}: Properties) => {
  return (
    <>
      <Head>
        <title>{title || defaults.title}</title>
        <meta name="title" content={title || defaults.title} />
        <meta name="description" content={description || defaults.description} />
      </Head>
      <main>{children}</main>
    </>
  );
}
