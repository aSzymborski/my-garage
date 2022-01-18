import React, { useContext } from 'react';
import { WishListContext } from 'providers/WishListProvider';
import { BsPlusCircle } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import otomoto from 'assets/otomoto.png';

import styles from 'components/organisms/WishList/WishList.module.scss';
export const WishList = () => {
  const context = useContext(WishListContext);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {context.wishlist.length >= 1 ? (
          context.wishlist.map((car) => (
            <li
              onMouseOver={() =>
                context.handleShowCar(car.model, car.link, car.photo)
              }
              key={car.model}
              className={styles.list__item}
            >
              <img className={styles.img} src={car.photo} alt="car" />
              <div className={styles.wrapper}>
                <p className={styles.wrapper__p}>{car.model}</p>
                <a
                  className={styles.wrapper__a}
                  href={car.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className={styles.imgOtomoto}
                    src={otomoto}
                    alt="otomoto"
                  />
                </a>
              </div>
              <button
                className={styles.buttonDelete}
                onClick={() => {
                  context.deleteCar();
                  context.setSuccess(false);
                }}
              >
                <AiOutlineDelete size={20} />
              </button>
            </li>
          ))
        ) : (
          <p className={styles.list__p}>
            Your dream car list is empty.
            <br />
            Add the first car.
          </p>
        )}
      </ul>

      <button
        onClick={() => {
          context.togglePopup();
          context.setSuccess(false);
        }}
        className={styles.buttonAdd}
      >
        <BsPlusCircle size={40} color="#e9b32b" />
      </button>
    </section>
  );
};
