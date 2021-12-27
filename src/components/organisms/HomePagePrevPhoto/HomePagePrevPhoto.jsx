import React from 'react';

import nextcar from 'assets/mustang.jpg';
import styles from 'components/organisms/HomePagePrevPhoto/HomePagePrevPhoto.module.scss';
export const HomePagePrevPhoto = () => {
  return (
    <section className={styles.container}>
      <img className={styles.container__img} src={nextcar} alt="prev-car"></img>
    </section>
  );
};
