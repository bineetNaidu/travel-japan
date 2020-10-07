import React from 'react';
import style from '../styles/index.module.css';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import Place from '../components/Place';
import places from '../public/places.json';

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

          {places.map((p) => (
            <Place {...p} key={p.name} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

Index.getInitialProps = () => {
  return { places };
};

export default Index;
