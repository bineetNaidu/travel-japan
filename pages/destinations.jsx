import React from 'react';
import Place from '../components/Place';
import placesData from '../public/places.json';
import style from '../styles/destinations.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const destinations = ({ places }) => {
  return (
    <div className={style.destinations}>
      <h1>#Popular Places</h1>
      <motion.div className={style.destinations__wrapper} layout>
        <AnimatePresence>
          {places.map((p) => (
            <Link href={`/destinations?place=${p.name}`} key={p.id}>
              <motion.div
                initial={{
                  opacity: 0,
                  x: '-50vw',
                  background: 'rgba(255,255,255,0)',
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { when: 'beforeChildren', delay: 1.5 },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    ease: 'easeOut',
                    easings: 'backOut',
                    duration: 0.5,
                  },
                }}
                layoutId={p.id}
                whileHover={{ background: 'rgba(255,255,255,0.1)' }}
                className={style.destinations__item}
              >
                <Place {...p} />
              </motion.div>
            </Link>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

destinations.getInitialProps = ({ query }) => {
  if (query.place) {
    const places = placesData.filter((p) => query.place === p.name);
    if (!places.length) return { places: placesData };

    return { places };
  } else {
    return { places: placesData };
  }
};

export default destinations;
