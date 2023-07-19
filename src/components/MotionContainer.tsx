import React from 'react';
import { motion } from 'framer-motion';

interface IMotionContainer {
  children: React.ReactNode;
}

const MotionContainer = ({ children }: IMotionContainer) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;
