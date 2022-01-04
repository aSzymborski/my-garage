import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { WishListContext } from 'providers/WishListProvider';
import { FormField } from 'components/atoms/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { TiDeleteOutline } from 'react-icons/ti';
import { GrUpload } from 'react-icons/gr';

import styles from 'components/organisms/Popup/Popup.module.scss';
export const Popup = () => {
  const { register, handleSubmit } = useForm();
  const context = useContext(WishListContext);

  const onSubmit = (data) => {
    context.setWishListCarModel(data.model);
    context.setWishListCarLink(data.link);
    context.setWishListCarPhoto(data.photo[0]);
  };

  return (
    <section className={styles.container}>
      <div className={styles.popupInner}>
        <form className={styles.form} onChange={handleSubmit(onSubmit)}>
          <FormField
            label="Model"
            type="text"
            name="model"
            register={register}
            placeholder="Enter the car model"
          />
          <FormField
            label="Link"
            type="text"
            name="link"
            register={register}
            placeholder="Enter the car link"
          />

          <FormField
            label="Photo"
            type="file"
            name="photo"
            register={register}
            style={{
              border: 'none',
              padding: '2',
              background: 'transparent',
              cursor: 'pointer',
            }}
          />
        </form>

        <button
          onClick={() => {
            context.handleUploadPhoto();
          }}
          className={styles.buttonUpload}
        >
          <GrUpload size={25} />
          <p>Upload photo</p>
        </button>

        <div className={styles.progressDiv}>
          <div
            style={{ width: `${context.progress}%` }}
            className={styles.fillDiv}
          >
            <span className={styles.progress}>{context.progress}%</span>
          </div>
        </div>

        <Button
          text="Add car"
          onClick={() => {
            context.addCar();
          }}
        />

        <button
          onClick={() => {
            context.setProgress(0);
            context.setWishListCarPhoto(null);
            context.togglePopup();
          }}
          className={styles.buttonClose}
        >
          <TiDeleteOutline size="30" />
        </button>
        <h3 className={styles.h3}>Make dreams come true!</h3>
      </div>
    </section>
  );
};
