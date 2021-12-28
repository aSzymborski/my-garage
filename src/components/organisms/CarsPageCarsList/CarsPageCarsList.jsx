import React, { useContext } from 'react';
import { CarsContext } from 'providers/CarsProvider';

import styles from 'components/organisms/CarsPageCarsList/CarsPageCarsList.module.scss';
export const CarsPageCarsList = () => {
  const context = useContext(CarsContext);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {context.cars.map(
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
          }) => (
            <li
              key={id}
              className={styles.list__item}
              onMouseOver={() =>
                context.handleShowCar(
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
