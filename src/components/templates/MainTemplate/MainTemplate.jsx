import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from 'components/organisms/Navigation/Navigation';
import { HomePage } from '../HomePage/HomePage';
import { CarsPage } from '../CarsPage/CarsPage';
import { WishListPage } from '../WishListPage/WishListPage';

import styles from 'components/templates/MainTemplate/MainTemplate.module.scss';
import { MobileNavigation } from 'components/organisms/MobileNavigation/MobileNavigation';
export const MainTemplate = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
      </Routes>
      <MobileNavigation />
    </div>
  );
};