import React from 'react';
import { useWishlist } from 'providers/WishListProvider';
import car from 'assets/car.svg';

import styles from 'components/organisms/WishListPhoto/WishListPhoto.module.scss';
export const WishListPhoto = () => {
  const { wishlist, currentCar } = useWishlist();
  return (
    <section className={styles.container}>
      {wishlist.length >= 1 ? (
        <img className={styles.img} src={currentCar.photo} alt="car" />
      ) : (
        <img className={styles.container__img} src={car} alt="car" />
      )}
    </section>
  );
};
