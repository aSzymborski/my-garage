import React from 'react';

import lambo from 'assets/lambo.jpg';

import styles from 'components/organisms/WishListPhoto/WishListPhoto.module.scss';
export const WishListPhoto = () => {
  return (
    <section className={styles.container}>
      <img className={styles.img} src={lambo} alt="car" />
    </section>
  );
};
