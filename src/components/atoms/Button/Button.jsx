import React from 'react';

import styles from 'components/atoms/Button/Button.module.scss';
export const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};
