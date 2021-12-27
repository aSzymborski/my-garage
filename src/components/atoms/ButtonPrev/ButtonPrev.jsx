import React from 'react';

import prevarrow from 'assets/icons/prevarrow.svg';
import styles from 'components/atoms/ButtonPrev/ButtonPrev.module.scss';
export const ButtonPrev = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <img src={prevarrow} alt="prev-arrow"></img>
    </button>
  );
};
