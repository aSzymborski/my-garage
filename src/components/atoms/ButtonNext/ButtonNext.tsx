import React from 'react';
import { FunctionComponent } from 'react';

import nextarrow from 'assets/icons/nextarrow.svg';
import styles from 'components/atoms/ButtonNext/ButtonNext.module.scss';

type ButtonNextProps = {
  onClick: () => void;
};

export const ButtonNext: FunctionComponent<ButtonNextProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <img src={nextarrow} alt="next-arrow"></img>
    </button>
  );
};
