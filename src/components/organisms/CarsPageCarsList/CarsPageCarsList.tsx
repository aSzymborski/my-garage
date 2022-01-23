import React from 'react';
import { useCars } from 'providers/CarsProvider';

import styles from 'components/organisms/CarsPageCarsList/CarsPageCarsList.module.scss';
export const CarsPageCarsList = () => {
  const { cars, handleShowCar } = useCars();

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {cars.map(
          ({
            id,
            model,
            year,
            oilengine,
            oilgearbox,
            breakfluid,
            airfilter,
            fuelfilter,
            cabinfilter,
            photo,
          }: any) => (
            <li
              key={id}
              className={styles.list__item}
              onMouseOver={() =>
                handleShowCar(
                  id,
                  model,
                  year,
                  oilengine,
                  oilgearbox,
                  breakfluid,
                  airfilter,
                  fuelfilter,
                  cabinfilter,
                  photo
                )
              }
            >
              <img className={styles.img} src={photo.url} alt={model} />
            </li>
          )
        )}
      </ul>
    </section>
  );
};
