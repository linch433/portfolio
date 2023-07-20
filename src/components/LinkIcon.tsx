import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

type LinkIcon_T = {
  children: React.ReactNode;
  link: string;
};

const LinkIcon = ({ children, link }: LinkIcon_T) => {
  return (
    <motion.a
      className={clsx(
        'flex items-center justify-center',
        'h-10 w-10',
        'bg-primary-light-grey text-highlight rounded-xl',
        'hover:bg-primary-light-navy hover:text-primary-light-grey',
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      href={link}
      target="_blank"
    >
      {children}
    </motion.a>
  );
};

export default LinkIcon;
