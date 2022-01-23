import React from 'react';
import { FunctionComponent } from 'react';
import { BiError } from 'react-icons/bi';
import styles from 'components/molecules/ErrorModal/ErrorModal.module.scss';

type ErrorModalProps = {
  error: string;
};
export const ErrorModal: FunctionComponent<ErrorModalProps> = ({ error }) => {
  return (
    <div className={styles.wrapper}>
      <BiError size={35} color="white" />
      <p>Unsucccessuful {error}</p>
    </div>
  );
};
