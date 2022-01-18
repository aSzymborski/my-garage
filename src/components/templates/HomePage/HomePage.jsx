import React from 'react';
import { MobileHeader } from 'components/organisms/MobileHeader/MobileHeader';
import { Slider } from 'components/organisms/Slider/Slider';

import styles from 'components/templates/HomePage/HomePage.module.scss';
export const HomePage = () => {
  return (
    <div className={styles.container}>
      <MobileHeader text="My Garage" />
      <Slider />
    </div>
  );
};
