import React, { useState, useEffect, useContext } from 'react';
import { FunctionComponent } from 'react';
import axios from 'axios';

export const CarsContext = React.createContext<CarsContextData | null>(null);

export const CarsProvider: FunctionComponent = ({ children }) => {
  const value = useProviderCars();
  return <CarsContext.Provider value={value}>{children}</CarsContext.Provider>;
};

export interface ICurrentCar {
  id: number;
  model: string;
  year: string;
  oilengine: string;
  oilgearbox: string;
  breakfluid: string;
  airfilter: string;
  fuelfilter: string;
  cabinfilter: string;
  photo: string;
}

export const useProviderCars = () => {
  const [cars, setCars] = useState([]);
  const [currentCar, setCurrentCar] = useState<ICurrentCar | object>();
  const [activeIdx, setActiveIdx] = useState(0);

  const nextCar = () => {
    setActiveIdx((prevState) => {
      if (prevState + 1 <= cars.length - 1) {
        return prevState + 1;
      }

      return prevState;
    });
  };

  const prevCar = () => {
    setActiveIdx((prevState) => {
      if (prevState - 1 >= 0) {
        return prevState - 1;
      }

      return prevState;
    });
  };

  const sliderStyle = () => {
    return {
      transform: `translateX(-${activeIdx * window.innerWidth}px)`,
    };
  };

  const API_TOKEN = '2ff6e0302d3bde8a84b0fe0e42e7a0';

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
          {
            allCars {
              id
              model
              year
              oilengine
              oilgearbox
              breakfluid
              airfilter
              fuelfilter
              cabinfilter
              photo {
                url
              }
            }
          }`,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setCars(data.allCars);
        setCurrentCar({
          id: data.allCars[0].id,
          model: data.allCars[0].model,
          year: data.allCars[0].year,
          oilengine: data.allCars[0].oilengine,
          oilgearbox: data.allCars[0].oilgearbox,
          breakfluid: data.allCars[0].breakfluid,
          airfilter: data.allCars[0].airfilter,
          fuelfilter: data.allCars[0].fuelfilter,
          cabinfilter: data.allCars[0].cabinfilter,
          photo: data.allCars[0].photo,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleShowCar = (
    id: number,
    model: string,
    year: string,
    oilengine: string,
    oilgearbox: string,
    breakfluid: string,
    airfilter: string,
    fuelfilter: string,
    cabinfilter: string,
    photo: string
  ) => {
    const newCar: object = {
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
    };

    setCurrentCar(newCar);
  };

  return {
    cars,
    setCars,
    currentCar,
    setCurrentCar,
    activeIdx,
    setActiveIdx,
    nextCar,
    prevCar,
    sliderStyle,
    handleShowCar,
  };
};

type CarsContextData = ReturnType<typeof useProviderCars>;

export const useCars = () => {
  const cars = useContext(CarsContext);
  if (!cars) {
    throw new Error('useCars must be used inside CarsProvider');
  }

  return cars;
};
