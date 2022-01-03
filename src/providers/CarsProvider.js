import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CarsContext = React.createContext({
  cars: [],
  currentCar: {},
  handleShowCar: () => {},
  indexCenterCar: '',
  indexPrevCar: '',
  indexNextCar: '',
  prevCar: () => {},
  nextCar: () => {},
});
const API_TOKEN = '2ff6e0302d3bde8a84b0fe0e42e7a0';

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [currentCar, setCurrentCar] = useState();
  const [indexCenterCar, setIndexCenterCar] = useState(0);
  const [indexPrevCar, setIndexPrevCar] = useState(5);
  const [indexNextCar, setIndexNextCar] = useState(1);

  const length = cars.length;

  const nextCar = () => {
    setIndexCenterCar(indexCenterCar === length - 1 ? 0 : indexCenterCar + 1);
    setIndexNextCar(indexNextCar === length - 1 ? 0 : indexNextCar + 1);
    setIndexPrevCar(indexPrevCar === length - 1 ? 0 : indexPrevCar + 1);
  };

  const prevCar = () => {
    setIndexCenterCar(indexCenterCar === 0 ? length - 1 : indexCenterCar - 1);
    setIndexNextCar(indexNextCar === 0 ? length - 1 : indexNextCar - 1);
    setIndexPrevCar(indexPrevCar === 0 ? length - 1 : indexPrevCar - 1);
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
        indexCenterCar,
        indexNextCar,
        indexPrevCar,
        prevCar,
        nextCar,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};
