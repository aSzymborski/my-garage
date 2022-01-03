import React, { useContext } from 'react';
import { CarsContext } from 'providers/CarsProvider';

import styles from 'components/organisms/HomePagePrevPhoto/HomePagePrevPhoto.module.scss';
export const HomePagePrevPhoto = () => {
  const context = useContext(CarsContext);
  return (
    <section className={styles.container}>
      {context.cars.map((car, index) => {
        return (
          index === context.indexPrevCar && (
            <img
              key={car.id}
              className={styles.container__img}
              src={car.photo.url}
              alt="prev-car"
            ></img>
          )
        );
      })}
    </section>
  );
};
