import React from 'react';

import nextcar from 'assets/ferrari.jpg';
import styles from 'components/organisms/HomePageNextPhoto/HomePageNextPhoto.module.scss';
export const HomePageNextPhoto = () => {
  return (
    <section className={styles.container}>
      <img className={styles.container__img} src={nextcar} alt="next-car"></img>
    </section>
  );
};
