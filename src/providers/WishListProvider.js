import React, { useState, useEffect } from 'react';
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

export const WishListContext = React.createContext({
  isOpen: '',
  setIsOpen: () => {},
  togglePopup: () => {},
  wishList: [],
  getWishlist: () => {},
  wishListCarModel: '',
  setWishListCarModel: () => {},
  wishListCarLink: '',
  setWishListCarLink: () => {},
  addCar: () => {},
  currentCar: {},
  setCurrentCar: () => {},
  handleShowCar: () => {},
  deleteCar: () => {},
  wishListCarPhoto: '',
  setWishListCarPhoto: () => {},
  handleUploadPhoto: () => {},
  progress: '',
  setProgress: () => {},
  wishListCarUrl: '',
  setWishListCarUrl: () => {},
});

export const WishListProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [currentCar, setCurrentCar] = useState({});
  const [wishListCarModel, setWishListCarModel] = useState(null);
  const [wishListCarLink, setWishListCarLink] = useState(null);
  const [wishListCarPhoto, setWishListCarPhoto] = useState(null);
  const [wishListCarUrl, setWishListCarUrl] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    getWishlist();
  }, []);

  const getWishlist = async () => {
    const wishListCol = collection(db, 'wishlist');
    const docRef = await getDocs(wishListCol);
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
        alert('data added successfully');
        getWishlist();
        setIsOpen(!isOpen);
        setProgress(0);
      })
      .catch((error) => {
        alert('Unsucccessuful operation, error:' + error);
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
    )
      return;
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
        getDownloadURL(uploadTask.snapshot.ref).then((url) =>
          setWishListCarUrl(url)
        );
      }
    );
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleShowCar = (model, link, photo) => {
    const newCurrentCar = {
      model,
      link,
      photo,
    };
    setCurrentCar(newCurrentCar);
  };

  return (
    <WishListContext.Provider
      value={{
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
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};
