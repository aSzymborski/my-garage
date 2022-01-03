import React, { useContext } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { ButtonPrev } from 'components/atoms/ButtonPrev/ButtonPrev';
import { ButtonNext } from 'components/atoms/ButtonNext/ButtonNext';
import { CarsContext } from 'providers/CarsProvider';

import currentcar from 'assets/lambo.jpg';
import styles from 'components/organisms/HomePageCurrentPhoto/HomePageCurrentPhoto.module.scss';
export const HomePageCurrentPhoto = () => {
  const context = useContext(CarsContext);
  return (
    <section className={styles.container}>
      <ButtonPrev />

      {context.cars.map((car, index) => {
        return (
          index === context.indexCenterCar && (
            <img
              key={car.id}
              className={styles.container__img}
              src={car.photo.url}
              alt="current-car"
            ></img>
          )
        );
      })}

      <ButtonNext />

      <Button text="more about the car" />
    </section>
  );
};
