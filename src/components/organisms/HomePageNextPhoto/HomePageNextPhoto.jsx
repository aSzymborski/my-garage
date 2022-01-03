import React, { useContext } from 'react';
import { CarsContext } from 'providers/CarsProvider';

import styles from 'components/organisms/HomePageNextPhoto/HomePageNextPhoto.module.scss';
export const HomePageNextPhoto = () => {
  const context = useContext(CarsContext);
  return (
    <section className={styles.container}>
      {context.cars.map((car, index) => {
        return (
          index === context.indexNextCar && (
            <img
              key={car.id}
              className={styles.container__img}
              src={car.photo.url}
              alt="next-car"
            ></img>
          )
        );
      })}
    </section>
  );
};
