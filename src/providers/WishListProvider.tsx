import React, { useState, useEffect, useContext } from 'react';
import { FunctionComponent } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore/lite';
import { db } from 'firebase.js';
import { storage } from 'firebase.js';

export const WishListContext = React.createContext<WishlistContextData | null>(
  null
);

export const WishListProvider: FunctionComponent = ({ children }) => {
  const value = useProviderWishList();
  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
};

export const useProviderWishList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [currentCar, setCurrentCar] = useState<any | object>({});
  const [wishListCarModel, setWishListCarModel] = useState(null);
  const [wishListCarLink, setWishListCarLink] = useState(null);
  const [wishListCarPhoto, setWishListCarPhoto] = useState<any>(null);
  const [wishListCarUrl, setWishListCarUrl] = useState(null);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorValue, setErrorValue] = useState<any>(null);
  useEffect(() => {
    getWishlist();
  }, []);
  const getWishlist = async () => {
    const wishlistCol = collection(db, 'wishlist');
    const docRef = await getDocs(wishlistCol);
    const currentWishlist = docRef.docs.map((doc) => doc.data());
    if (currentWishlist.length >= 1) {
      setWishlist(currentWishlist);
      setCurrentCar({
        model: currentWishlist[0].model,
        link: currentWishlist[0].link,
        photo: currentWishlist[0].photo,
      });
    }
  };
  const addCar = async () => {
    if (
      wishListCarPhoto === null ||
      wishListCarModel === null ||
      wishListCarLink === null ||
      wishListCarUrl === null
    )
      return;
    const wishListCol = doc(db, 'wishlist', wishListCarModel);
    await setDoc(wishListCol, {
      model: wishListCarModel,
      link: wishListCarLink,
      photo: wishListCarUrl,
    })
      .then(() => {
        setSuccess(true);
        getWishlist();
        setIsOpen(!isOpen);
        setProgress(0);
      })
      .catch((error) => {
        if (error !== null) {
          setErrorValue(error);
          setError(true);
        }
      });
  };
  const deleteCar = async () => {
    await deleteDoc(doc(db, 'wishlist', currentCar.model)).then(() => {
      if (wishlist.length === 1) {
        setWishlist([]);
      }
      getWishlist();
    });
  };
  const handleUploadPhoto = async () => {
    if (
      wishListCarPhoto === null ||
      wishListCarModel === null ||
      wishListCarLink === null
    ) {
      return;
    }
    const storageRef = ref(storage, `/images/${wishListCarPhoto.name}`);
    const uploadTask = uploadBytesResumable(storageRef, wishListCarPhoto);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url: any) =>
          setWishListCarUrl(url)
        );
      }
    );
  };
  const togglePopup = () => setIsOpen((prevState) => !prevState);
  const handleShowCar = (model: string, link: string, photo: string) => {
    const newCurrentCar = {
      model,
      link,
      photo,
    };
    setCurrentCar(newCurrentCar);
  };
  return {
    isOpen,
    setIsOpen,
    togglePopup,
    wishlist,
    wishListCarModel,
    setWishListCarModel,
    wishListCarLink,
    setWishListCarLink,
    addCar,
    currentCar,
    setCurrentCar,
    handleShowCar,
    deleteCar,
    wishListCarPhoto,
    setWishListCarPhoto,
    handleUploadPhoto,
    progress,
    setProgress,
    getWishlist,
    success,
    setSuccess,
    error,
    setError,
    errorValue,
    setErrorValue,
  };
};

type WishlistContextData = ReturnType<typeof useProviderWishList>;

export const useWishlist = () => {
  const wishlist = useContext(WishListContext);
  if (!wishlist) {
    throw new Error('useWishlist must be used inside WishlistProvider');
  }

  return wishlist;
};
