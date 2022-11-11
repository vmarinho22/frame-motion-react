import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div 
      className="home container" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;