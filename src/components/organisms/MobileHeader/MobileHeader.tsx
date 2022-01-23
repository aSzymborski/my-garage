import React from 'react';
import { FunctionComponent } from 'react';

type MobileHeaderProps = {
  text: string;
};

import styles from 'components/organisms/MobileHeader/MobileHeader.module.scss';
export const MobileHeader: FunctionComponent<MobileHeaderProps> = ({
  text,
}) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.container__h1}>{text}</h1>
    </header>
  );
};
