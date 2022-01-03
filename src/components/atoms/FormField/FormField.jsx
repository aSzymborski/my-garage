import React from 'react';

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
      <label>{label}</label>
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
