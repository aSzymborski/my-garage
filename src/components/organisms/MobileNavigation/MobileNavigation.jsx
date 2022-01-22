import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineCar,
  AiOutlineShoppingCart,
} from 'react-icons/ai';

import styles from 'components/organisms/MobileNavigation/MobileNavigation.module.scss';
export const MobileNavigation = () => {
  return (
    <nav className={styles.container}>
      <Link to="/">
        <AiOutlineHome size={28} color="white" />
      </Link>
      <Link to="/cars">
        <AiOutlineCar size={28} color="white" />
      </Link>
      <Link to="/wishlist">
        <AiOutlineShoppingCart size={28} color="white" />
      </Link>
    </nav>
  );
};
