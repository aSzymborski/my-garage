import React, { useContext } from 'react';
import { CarsContext } from 'providers/CarsProvider';

import styles from 'components/organisms/CarsPageCarInfo/CarsPageCarInfo.module.scss';
export const CarsPageCarInfo = () => {
  const context = useContext(CarsContext);
  return (
    <section className={styles.container}>
      <div className={styles.infoWrapper}>
        <h1 className={styles.infoWrapper__h1}>{context.currentCar.model}</h1>
        <h2 className={styles.infoWrapper__h2}>Stats</h2>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <p className={styles.list__item__p}>OIL ENGINE</p>
            <span>{context.currentCar.oilengine} km</span>
          </li>
          <li className={styles.list__item}>
            <p className={styles.list__item__p}>OIL GEARBOX</p>
            <span>{context.currentCar.oilgearbox} km</span>
          </li>
          <li className={styles.list__item}>
            <p className={styles.list__item__p}>BRAKE FLUID</p>
            <span>{context.currentCar.breakfluid} km</span>
          </li>
          <li className={styles.list__item}>
            <p className={styles.list__item__p}>AIR FILTER</p>
            <span>{context.currentCar.airfilter} km</span>
          </li>
          <li className={styles.list__item}>
            <p className={styles.list__item__p}>CABIN FILTER</p>
            <span>{context.currentCar.cabinfilter} km</span>
          </li>
          <li className={styles.list__item}>
            <p className={styles.list__item__p}>FUEL FILTER</p>
            <span>{context.currentCar.fuelfilter} km</span>
          </li>
        </ul>
      </div>
      <div className={styles.photoWrapper}>
        <img
          className={styles.img}
          src={context.currentCar.photo.url}
          alt={context.currentCar.model}
        />
      </div>
    </section>
  );
};
