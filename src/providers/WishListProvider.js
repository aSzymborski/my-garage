import React from 'react';

export const WishListContext = React.createContext({});

export const WishListProvider = () => {
  return <WishListContext.Provider value={{}}></WishListContext.Provider>;
};
