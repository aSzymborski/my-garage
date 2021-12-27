import React from 'react';

import currentcar from 'assets/lambo.jpg';
import styles from 'components/organisms/CarsPageCarInfo/CarsPageCarInfo.module.scss';
export const CarsPageCarInfo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.infoWrapper}>
        <h1 className={styles.infoWrapper__h1}>Lamborghini</h1>
        <h2 className={styles.infoWrapper__h2}>Stats</h2>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <p className={styles.list__item__p}>OIL ENGINE</p>
            <span>123221 km</span>
          </li>
          <li className={styles.list__item}>
            <p className={styles.list__item__p}>OIL GEARBOX</p>
            <span>123221 km</span>
          </li>
          <li className={styles.list__item}>
            <p className={styles.list__item__p}>BRAKE FLUID</p>
            <span>123221 km</span>
          </li>
          <li className={styles.list__item}>
            <p className={styles.list__item__p}>AIR FILTER</p>
            <span>123221 km</span>
          </li>
          <li className={styles.list__item}>
            <p className={styles.list__item__p}>CABIN FILTER</p>
            <span>123221 km</span>
          </li>
          <li className={styles.list__item}>
            <p className={styles.list__item__p}>FUEL FILTER</p>
            <span>123221 km</span>
          </li>
        </ul>
      </div>
      <div className={styles.photoWrapper}>
        <img className={styles.img} src={currentcar} alt="car" />
      </div>
    </section>
  );
};
