import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CarsContext = React.createContext({
  cars: [],
  currentCar: {},
  handleShowCar: () => {},
});
const API_TOKEN = '2ff6e0302d3bde8a84b0fe0e42e7a0';

const initialState = {
  id: '1',
  model: 'Lamborghini',
  year: '2017',
  oilengine: '34.289',
  oilgearbox: '22.423',
  breakfluid: '11.458',
  airfilter: '7.543',
  fuelfilter: '11.458',
  cabinfilter: '12.399',
  photo: '',
};

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [currentCar, setCurrentCar] = useState(initialState);

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
    <CarsContext.Provider value={{ cars, handleShowCar, currentCar }}>
      {children}
    </CarsContext.Provider>
  );
};
