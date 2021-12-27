import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { ButtonPrev } from 'components/atoms/ButtonPrev/ButtonPrev';
import { ButtonNext } from 'components/atoms/ButtonNext/ButtonNext';

import currentcar from 'assets/lambo.jpg';
import styles from 'components/organisms/HomePageCurrentPhoto/HomePageCurrentPhoto.module.scss';
export const HomePageCurrentPhoto = () => {
  return (
    <section className={styles.container}>
      <ButtonPrev />
      <img
        className={styles.container__img}
        src={currentcar}
        alt="current-car"
      ></img>
      <ButtonNext />

      <Button text="more about the car" />
    </section>
  );
};
