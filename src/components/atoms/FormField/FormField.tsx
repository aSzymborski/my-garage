import React from 'react';
import { FunctionComponent } from 'react';

import styles from 'components/atoms/FormField/FormField.module.scss';
type FormFieldProps = {
  label: string;
  type: string;
  name: string;
  register: any;
  placeholder?: string;
  style?: object;
};
export const FormField: FunctionComponent<FormFieldProps> = ({
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
