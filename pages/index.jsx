import React from 'react';
import style from '../styles/index.module.css';
import Header from '../components/Header';

const Index = () => {
  return (
    <div className={style.index}>
      <div className={style.darkWrapper}></div>
      <Header />
      <h1>Welcome to Japan</h1>
    </div>
  );
};

export default Index;
