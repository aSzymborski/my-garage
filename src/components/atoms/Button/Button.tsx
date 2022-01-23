import React from 'react';
import { FunctionComponent } from 'react';

import styles from 'components/atoms/Button/Button.module.scss';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const Button: FunctionComponent<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};
