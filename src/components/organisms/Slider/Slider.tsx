import React from 'react';
import { useCars } from 'providers/CarsProvider';
import { ButtonPrev } from 'components/atoms/ButtonPrev/ButtonPrev';
import { ButtonNext } from 'components/atoms/ButtonNext/ButtonNext';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';

import styles from 'components/organisms/Slider/Slider.module.scss';
export const Slider: React.FC = () => {
  const { prevCar, nextCar, sliderStyle, cars, handleShowCar } = useCars();
  return (
    <div className={styles.wrapper}>
      <ButtonPrev onClick={() => prevCar()} />
      <ButtonNext onClick={() => nextCar()} />
      <div className={styles.slider} style={sliderStyle()}>
        {cars.map((car: any) => (
          <div key={car.id} className={styles.slide}>
            <img src={car.photo.url} alt="car" />
            <Link className={styles.link} to="/cars">
              <Button
                onClick={() =>
                  handleShowCar(
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
