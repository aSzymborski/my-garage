import React from 'react';
import { HomePagePrevPhoto } from 'components/organisms/HomePagePrevPhoto/HomePagePrevPhoto';
import { HomePageCurrentPhoto } from 'components/organisms/HomePageCurrentPhoto/HomePageCurrentPhoto';
import { HomePageNextPhoto } from 'components/organisms/HomePageNextPhoto/HomePageNextPhoto';

import styles from 'components/templates/HomePage/HomePage.module.scss';
import { MobileHeader } from 'components/organisms/MobileHeader/MobileHeader';
export const HomePage = () => {
  return (
    <div className={styles.container}>
      <MobileHeader text="My Garage" />
      <HomePagePrevPhoto />
      <HomePageCurrentPhoto />
      <HomePageNextPhoto />
    </div>
  );
};
