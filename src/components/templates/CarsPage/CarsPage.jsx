import React from 'react';
import { MobileHeader } from 'components/organisms/MobileHeader/MobileHeader';

import styles from 'components/templates/CarsPage/CarsPage.module.scss';
import { CarsPageCarsList } from 'components/organisms/CarsPageCarsList/CarsPageCarsList';
import { CarsPageCarInfo } from 'components/organisms/CarsPageCarInfo/CarsPageCarInfo';
export const CarsPage = () => {
  return (
    <div className={styles.container}>
      <MobileHeader text="The Cars" />
      <CarsPageCarsList />
      <CarsPageCarInfo />
    </div>
  );
};
