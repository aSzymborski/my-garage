import React from 'react';
import PropTypes from 'prop-types';

import styles from 'components/atoms/FormField/FormField.module.scss';
export const FormField = ({
  label,
  type,
  name,
  register,
  placeholder,
  style,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        style={style}
        className={styles.input}
        placeholder={placeholder}
        type={type}
        name={name}
        {...register(name)}
      />
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
};
