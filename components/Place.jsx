import React from 'react';
import style from '../styles/place.module.css';

const Place = ({ image, name, short_desc }) => {
  return (
    <div className={style.place}>
      <img src={image} alt="" className={style.place__img} />
      <div className={style.place__details}>
        <p className={style.place__info}>{short_desc}</p>
        <p className={style.place__name}>{name}</p>
      </div>
    </div>
  );
};

export default Place;
