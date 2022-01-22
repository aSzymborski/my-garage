import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CarsContext = React.createContext({
  cars: [],
  setCars: () => {},
  currentCar: {},
  handleShowCar: () => {},
  prevCar: () => {},
  nextCar: () => {},
  activeIdx: '',
  setActiveIdx: () => {},
  sliderStyle: () => {},
});

const API_TOKEN = '2ff6e0302d3bde8a84b0fe0e42e7a0';

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [currentCar, setCurrentCar] = useState({});
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
  ) => {
    const newCar = {
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
  return (
    <CarsContext.Provider
      value={{
        cars,
        handleShowCar,
        currentCar,
        prevCar,
        nextCar,
        activeIdx,
        setActiveIdx,
        sliderStyle,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};
