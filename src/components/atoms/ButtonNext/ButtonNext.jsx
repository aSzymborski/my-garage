import React from 'react';

import nextarrow from 'assets/icons/nextarrow.svg';
import styles from 'components/atoms/ButtonNext/ButtonNext.module.scss';
export const ButtonNext = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <img src={nextarrow} alt="next-arrow"></img>
    </button>
  );
};
