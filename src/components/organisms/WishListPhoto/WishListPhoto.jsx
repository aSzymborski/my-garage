import React, { useContext } from 'react';
import { WishListContext } from 'providers/WishListProvider';
import car from 'assets/car.svg';

import styles from 'components/organisms/WishListPhoto/WishListPhoto.module.scss';
export const WishListPhoto = () => {
  const context = useContext(WishListContext);
  return (
    <section className={styles.container}>
      {context.wishlist.length >= 1 ? (
        <img className={styles.img} src={context.currentCar.photo} alt="car" />
      ) : (
        <img className={styles.container__img} src={car} alt="car" />
      )}
    </section>
  );
};
