import React, { useContext } from 'react';
import { CarsContext } from 'providers/CarsProvider';

import styles from 'components/organisms/Slider/Slider.module.scss';
import { ButtonPrev } from 'components/atoms/ButtonPrev/ButtonPrev';
import { ButtonNext } from 'components/atoms/ButtonNext/ButtonNext';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
export const Slider = () => {
  const context = useContext(CarsContext);
  return (
    <div className={styles.wrapper}>
      <ButtonPrev onClick={() => context.prevCar()} />
      <ButtonNext onClick={() => context.nextCar()} />
      <div className={styles.slider} style={context.sliderStyle()}>
        {context.cars.map((car) => (
          <div key={car.id} className={styles.slide}>
            <img src={car.photo.url} alt="car" />
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
        ))}
      </div>
    </div>
  );
};
