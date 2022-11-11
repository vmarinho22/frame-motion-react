import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div className="home container" animate={{
      marginTop: 200,
      opacity: 0.2,
      rotateZ: 180
    }}>
      <motion.h2 animate={{
        scale: 2,
        color: '#ff2994',
      }}>
        Welcome to Pizza Joint
      </motion.h2>
      <br />
      <Link to="/base">
        <motion.button
          animate={{
            scale: 1.5,
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;