import React from 'react';
import { HamburgerButton } from 'components/atoms/HamburgerButton/HamburgerButton';

import styles from 'components/organisms/MobileHeader/MobileHeader.module.scss';
export const MobileHeader = ({ text }) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.container__h1}>{text}</h1>
      <HamburgerButton />
    </header>
  );
};
