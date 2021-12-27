import React from 'react';

import currentcar from 'assets/lambo.jpg';
import styles from 'components/organisms/CarsPageCarsList/CarsPageCarsList.module.scss';
export const CarsPageCarsList = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <img className={styles.img} src={currentcar} alt="car" />
        </li>
        <li className={styles.list__item}>
          <img className={styles.img} src={currentcar} alt="car" />
        </li>
        <li className={styles.list__item}>
          <img className={styles.img} src={currentcar} alt="car" />
        </li>
        <li className={styles.list__item}>
          <img className={styles.img} src={currentcar} alt="car" />
        </li>
        <li className={styles.list__item}>
          <img className={styles.img} src={currentcar} alt="car" />
        </li>
        <li className={styles.list__item}>
          <img className={styles.img} src={currentcar} alt="car" />
        </li>
      </ul>
    </section>
  );
};
