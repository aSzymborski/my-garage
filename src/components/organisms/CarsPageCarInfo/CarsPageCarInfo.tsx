import React from 'react';
// import { FunctionComponent } from 'react';
import { useCars } from 'providers/CarsProvider';

import styles from 'components/organisms/CarsPageCarInfo/CarsPageCarInfo.module.scss';

export const CarsPageCarInfo = () => {
  const car: any = useCars();

  return (
    <section className={styles.container}>
      <div className={styles.infoWrapper}>
        <h1 className={styles.infoWrapper__h1}>{car.currentCar.model}</h1>
        <h2 className={styles.infoWrapper__h2}>Stats</h2>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <p className={styles.list__item__p}>OIL ENGINE</p>
            <span>{car.currentCar.oilengine} km</span>
          </li>
          <li className={styles.list__item}>
            <p className={styles.list__item__p}>OIL GEARBOX</p>
            <span>{car.currentCar.oilgearbox} km</span>
          </li>
          <li className={styles.list__item}>
            <p className={styles.list__item__p}>BRAKE FLUID</p>
            <span>{car.currentCar.breakfluid} km</span>
          </li>
          <li className={styles.list__item}>
            <p className={styles.list__item__p}>AIR FILTER</p>
            <span>{car.currentCar.airfilter} km</span>
          </li>
          <li className={styles.list__item}>
            <p className={styles.list__item__p}>CABIN FILTER</p>
            <span>{car.currentCar.cabinfilter} km</span>
          </li>
          <li className={styles.list__item}>
            <p className={styles.list__item__p}>FUEL FILTER</p>
            <span>{car.currentCar.fuelfilter} km</span>
          </li>
        </ul>
      </div>
      <div className={styles.photoWrapper}>
        <img className={styles.img} src={car.currentCar.photo.url} alt="car" />
      </div>
    </section>
  );
};
