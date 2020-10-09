import React from 'react';
import Place from '../components/Place';
import places from '../public/places.json';
import style from '../styles/destinations.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

const destinations = ({ places }) => {
  return (
    <motion.div layout className={style.destinations}>
      <h1>#Popular Places</h1>
      <div className={style.destinations__wrapper}>
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
              layoutId={p.id}
              whileHover={{ background: 'rgba(255,255,255,0.1)' }}
              className={style.destinations__item}
            >
              <Place {...p} />
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

destinations.getInitialProps = () => {
  return { places };
};

export default destinations;
