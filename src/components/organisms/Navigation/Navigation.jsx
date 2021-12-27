import React from 'react';

import { Link } from 'react-router-dom';
import styles from 'components/organisms/Navigation/Navigation.module.scss';
export const Navigation = () => {
  return (
    <nav className={styles.container}>
      <Link to="/">
        <h2 className={styles.container__h2}>My Garage</h2>
      </Link>

      <ul className={styles.list}>
        <li className={styles.list__item}>
          <Link to="/cars">
            <p>Cars</p>
            <div className={styles.fillDiv}></div>
          </Link>
        </li>

        <li className={styles.list__item}>
          <Link to="/wishlist">
            <p>Wishlist</p>
            <div className={styles.fillDiv}></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
