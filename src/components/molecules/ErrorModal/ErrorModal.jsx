import React from 'react';
import PropTypes from 'prop-types';
import { BiError } from 'react-icons/bi';
import styles from 'components/molecules/ErrorModal/ErrorModal.module.scss';
export const ErrorModal = ({ error }) => {
  return (
    <div className={styles.wrapper}>
      <BiError size={35} color="white" />
      <p>Unsucccessuful {error}</p>
    </div>
  );
};

ErrorModal.propTypes = {
  error: PropTypes.string,
};
