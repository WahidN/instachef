import React, { ReactNode } from 'react'
import styles from "./Container.module.css";

interface Properties {
  children: ReactNode;
}

export const Container = ({children}: Properties) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
