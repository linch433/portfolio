import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

type LinkIcon_T = {
  children: React.ReactNode;
  link: string;
  stylingProps: string;
};

const LinkIcon = ({ children, link, stylingProps }: LinkIcon_T) => {
  return (
    <motion.a
      className={clsx(
        'flex items-center justify-center',
        stylingProps,
        'bg-primary-light-grey text-highlight',
        'hover:bg-primary-light-navy hover:text-primary-icon-light',
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
