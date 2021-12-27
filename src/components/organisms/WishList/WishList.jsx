import React from 'react';

import otomoto from 'assets/otomoto.png';
import lambo from 'assets/lambo.jpg';
import styles from 'components/organisms/WishList/WishList.module.scss';
export const WishList = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <img className={styles.img} src={lambo} alt="car" />
          <div className={styles.wrapper}>
            <p>BMW M5</p>
            <img className={styles.imgOtomoto} src={otomoto} alt="otomoto" />
          </div>
        </li>
        <li className={styles.list__item}>
          <img className={styles.img} src={lambo} alt="car" />
          <div className={styles.wrapper}>
            <p>BMW M5</p>
            <img className={styles.imgOtomoto} src={otomoto} alt="otomoto" />
          </div>
        </li>
      </ul>
    </section>
  );
};
