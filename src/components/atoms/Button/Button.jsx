import React from 'react';
import PropTypes from 'prop-types';

import styles from 'components/atoms/Button/Button.module.scss';
export const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
