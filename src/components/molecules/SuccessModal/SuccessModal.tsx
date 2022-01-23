import React from 'react';

import { MdOutlineDoneOutline } from 'react-icons/md';

import styles from 'components/molecules/SuccessModal/SuccessModal.module.scss';
export const SuccessModal = () => {
  return (
    <div className={styles.wrapper}>
      <MdOutlineDoneOutline size={35} color="white" />
      <p>Car added successfully</p>
    </div>
  );
};
