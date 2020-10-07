import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import styles from '../styles/Header.module.css';

// variants
const headerVariants = {
  initial: {
    opacity: 0,
    y: '-50vh',
  },
  animate: {
    opacity: 1,
    y: '0',
    transition: {
      delay: 0.3,
    },
  },
};

const Linksvariants = {
  initial: {
    opacity: 0.8,
  },
  hover: {
    opacity: 1,
    padding: '8px',
    border: '0.5px solid rgb(220,220,220)',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px',
  },
};

const Header = () => {
  return (
    <motion.div
      className={styles.header}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div className={styles.header__wrapper}>
        <Link href="/">
          <img
            src="https://cdn4.iconfinder.com/data/icons/travel-and-destination-2/512/20._Itsukushima_Shrine-128.png"
            alt="Travel Japan"
            className={styles.header__logo}
          />
        </Link>
        <motion.h3
          variants={Linksvariants}
          initial="initial"
          whileHover="hover"
          className={styles.header__links}
        >
          Hometales of Japan
        </motion.h3>
        <motion.h3
          variants={Linksvariants}
          initial="initial"
          whileHover="hover"
          className={styles.header__links}
        >
          <Link href="/destinations">Destinations</Link>
        </motion.h3>
        <motion.h3
          variants={Linksvariants}
          initial="initial"
          className={styles.header__links}
          whileHover="hover"
        >
          <Link href="/experience">Experiences</Link>
        </motion.h3>

        <input
          type="text"
          className={styles.header__searchInput}
          placeholder="Search..."
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={styles.header__ctx}
      >
        Explore
      </motion.button>
    </motion.div>
  );
};

export default Header;
