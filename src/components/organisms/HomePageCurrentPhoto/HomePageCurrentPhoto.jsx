import React, { useContext } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { ButtonPrev } from 'components/atoms/ButtonPrev/ButtonPrev';
import { ButtonNext } from 'components/atoms/ButtonNext/ButtonNext';
import { CarsContext } from 'providers/CarsProvider';
import { Link } from 'react-router-dom';

import styles from 'components/organisms/HomePageCurrentPhoto/HomePageCurrentPhoto.module.scss';
export const HomePageCurrentPhoto = () => {
  const context = useContext(CarsContext);
  return (
    <section className={styles.container}>
      <ButtonPrev onClick={() => context.prevCar()} />
      {context.cars.map((car, index) => {
        return (
          index === context.indexCenterCar && (
            <div key={car.id} className={styles.wrapper}>
              <img
                className={styles.container__img}
                src={car.photo.url}
                alt="current-car"
              ></img>
              <Link className={styles.link} to="/cars">
                <Button
                  onClick={() =>
                    context.handleShowCar(
                      car.id,
                      car.model,
                      car.year,
                      car.oilengine,
                      car.oilgearbox,
                      car.breakfluid,
                      car.airfilter,
                      car.fuelfilter,
                      car.cabinfilter,
                      car.photo
                    )
                  }
                  text="More about this car"
                />
              </Link>
            </div>
          )
        );
      })}

      <ButtonNext onClick={() => context.nextCar()} />
    </section>
  );
};
