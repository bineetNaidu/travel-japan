import React from 'react';
import style from '../styles/place.module.css';

const Place = () => {
  return (
    <div className={style.place}>
      <img
        src="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt=""
        className={style.place__img}
      />
      <div className={style.place__details}>
        <p className={style.place__info}>Get Into The Future In</p>
        <p className={style.place__name}>Tokyo</p>
      </div>
    </div>
  );
};

export default Place;
