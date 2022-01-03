import React, { useContext } from 'react';

import { WishListContext } from 'providers/WishListProvider';
import { MobileHeader } from 'components/organisms/MobileHeader/MobileHeader';
import { WishList } from 'components/organisms/WishList/WishList';
import { WishListPhoto } from 'components/organisms/WishListPhoto/WishListPhoto';
import { Popup } from 'components/organisms/Popup/Popup';
import styles from 'components/templates/WishListPage/WishListPage.module.scss';
export const WishListPage = () => {
  const context = useContext(WishListContext);
  return (
    <div className={styles.container}>
      <MobileHeader text="The WishList" />
      <WishList />
      <WishListPhoto />
      {context.isOpen === true && <Popup />}
    </div>
  );
};
