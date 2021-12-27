import React from 'react';

import styles from 'components/organisms/MobileHeader/MobileHeader.module.scss';
import { HamburgerButton } from 'components/atoms/HamburgerButton/HamburgerButton';
export const MobileHeader = ({ text }) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.container__h1}>{text}</h1>
      <HamburgerButton />
    </header>
  );
};
