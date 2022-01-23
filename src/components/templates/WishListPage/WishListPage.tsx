import React from 'react';
import { useWishlist } from 'providers/WishListProvider';
import { MobileHeader } from 'components/organisms/MobileHeader/MobileHeader';
import { WishList } from 'components/organisms/WishList/WishList';
import { WishListPhoto } from 'components/organisms/WishListPhoto/WishListPhoto';
import { Popup } from 'components/organisms/Popup/Popup';
import { SuccessModal } from 'components/molecules/SuccessModal/SuccessModal';
import { ErrorModal } from 'components/molecules/ErrorModal/ErrorModal';

import styles from 'components/templates/WishListPage/WishListPage.module.scss';
export const WishListPage = () => {
  const { isOpen, success, error, errorValue } = useWishlist();
  return (
    <div className={styles.container}>
      <MobileHeader text="The WishList" />
      <WishList />
      <WishListPhoto />
      {isOpen === true && <Popup />}
      {success && <SuccessModal />}
      {error && <ErrorModal error={errorValue} />}
    </div>
  );
};
