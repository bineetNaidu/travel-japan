import React from 'react';
import style from '../styles/index.module.css';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import Place from '../components/Place';
import placesData from '../public/places.json';

// Variants
const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: { opacity: 1, transition: { delay: 1 } },
};

const tileVariants = {
  initial: {
    opacity: 0,
  },
  animate: { opacity: 1, transition: { delay: 1 } },
};

const Index = ({ places }) => {
  return (
    <>
      <div className={style.index}>
        <Header />
        <div className={style.darkWrapper}></div>
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className={style.index__wrapper}
        >
          <motion.h1 className={style.index__tile} variants={tileVariants}>
            Welcome to Japan
          </motion.h1>

          <div className={style.top__places}>
            {places.map((p) => (
              <Place {...p} key={p.id} />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

Index.getInitialProps = () => {
  let places = [];
  let i = 0;
  while (i !== 3) {
    places.push(placesData[i]);
    i++;
  }
  return { places };
};

export default Index;
