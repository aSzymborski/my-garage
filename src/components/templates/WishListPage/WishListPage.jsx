import React from 'react';

import styles from 'components/templates/WishListPage/WishListPage.module.scss';

import { MobileHeader } from 'components/organisms/MobileHeader/MobileHeader';
import { WishList } from 'components/organisms/WishList/WishList';
import { WishListPhoto } from 'components/organisms/WishListPhoto/WishListPhoto';
export const WishListPage = () => {
  return (
    <div className={styles.container}>
      <MobileHeader text="The WishList" />
      <WishList />
      <WishListPhoto />
    </div>
  );
};
