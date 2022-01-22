import React from 'react';
import PropTypes from 'prop-types';

import styles from 'components/organisms/MobileHeader/MobileHeader.module.scss';
export const MobileHeader = ({ text }) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.container__h1}>{text}</h1>
    </header>
  );
};

MobileHeader.propTypes = {
  text: PropTypes.string,
};
