import React from 'react';
import PropTypes from 'prop-types';

import prevarrow from 'assets/icons/prevarrow.svg';
import styles from 'components/atoms/ButtonPrev/ButtonPrev.module.scss';
export const ButtonPrev = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <img src={prevarrow} alt="prev-arrow"></img>
    </button>
  );
};

ButtonPrev.propTypes = {
  onClick: PropTypes.func,
};
