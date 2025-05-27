import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { motion } from 'framer-motion';

const Header = () => {

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
    </motion.div>
  );
};

export default Header;