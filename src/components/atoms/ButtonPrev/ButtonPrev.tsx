import React from 'react';
import { FunctionComponent } from 'react';

import prevarrow from 'assets/icons/prevarrow.svg';
import styles from 'components/atoms/ButtonPrev/ButtonPrev.module.scss';

type ButtonPrevProps = {
  onClick: () => void;
};

export const ButtonPrev: FunctionComponent<ButtonPrevProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <img src={prevarrow} alt="prev-arrow"></img>
    </button>
  );
};
